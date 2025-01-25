const http = require("http");
const fs = require("fs");
const path = require("path");

// ✅ Static directory (current folder)
const baseDir = __dirname;

// ✅ Create a basic HTTP server
const server = http.createServer((req, res) => {
    let filePath = path.join(baseDir, req.url === "/" ? "/index.html" : req.url);

    // ✅ Read file and serve
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": getContentType(filePath) });
        res.end(data);
    });
});

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
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
    };
    return map[ext] || "text/plain";
};

// ✅ Server listen karega 3000 pe
const PORT = 5500;
server.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
