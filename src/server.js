const http = require("http");
const fs = require("fs");
const path = require("path");

// ✅ Static directory (current folder)
const baseDir = __dirname;

// ✅ Function to get Content-Type based on file extension
const getContentType = (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    const map = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".woff": "font/woff",
        ".woff2": "font/woff2",
        ".ttf": "font/ttf",
        ".eot": "application/vnd.ms-fontobject",
    };
    return map[ext] || "text/plain";
};

// ✅ Function to get Cache-Control header based on file type
const getCacheControl = (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    // HTML files should not be cached (always fetch fresh)
    if (['.html'].includes(ext)) {
        return 'no-cache, no-store, must-revalidate';
    }
    // Static assets can be cached for 1 year
    if (['.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.woff', '.woff2', '.ttf', '.eot'].includes(ext)) {
        return 'public, max-age=31536000'; // 1 year
    }
    // JSON and other files: short cache
    if (['.json'].includes(ext)) {
        return 'public, max-age=3600'; // 1 hour
    }
    return 'no-cache';
};

// ✅ Create a basic HTTP server with improved error handling
const server = http.createServer((req, res) => {
    // Normalize and sanitize path
    let filePath = path.normalize(path.join(baseDir, req.url === "/" ? "/index.html" : req.url));
    
    // Prevent directory traversal attacks
    if (!filePath.startsWith(baseDir)) {
        res.writeHead(403, { "Content-Type": "text/plain" });
        return res.end("403 Forbidden");
    }
    
    // Check if file exists before reading
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            return res.end("404 Not Found");
        }
        
        // Check if it's a directory
        fs.stat(filePath, (statErr, stats) => {
            if (statErr) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("500 Internal Server Error");
            }
            
            if (stats.isDirectory()) {
                res.writeHead(403, { "Content-Type": "text/plain" });
                return res.end("403 Forbidden");
            }
            
            // Read file
            fs.readFile(filePath, (readErr, data) => {
                if (readErr) {
                    console.error("Error reading file:", readErr);
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    return res.end("500 Internal Server Error");
                }
                
                // Set caching headers
                const cacheControl = getCacheControl(filePath);
                res.setHeader("Cache-Control", cacheControl);
                
                // Set content type
                const contentType = getContentType(filePath);
                res.writeHead(200, { "Content-Type": contentType });
                res.end(data);
            });
        });
    });
});

// ✅ Server listen karega 3000 pe
const PORT = 5501;
server.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
