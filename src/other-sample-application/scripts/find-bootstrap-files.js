#!/usr/bin/env node

/**
 * Find HTML files that use Bootstrap
 * Usage: node scripts/find-bootstrap-files.js [directory]
 */

const fs = require('fs');
const path = require('path');

const bootstrapPatterns = [
  /bootstrap/i,
  /btn btn-/,
  /container/,
  /col-(xs|sm|md|lg|xl)/,
  /row/,
  /jumbotron/,
  /form-control/,
  /form-group/,
  /list-group/,
  /navbar/,
  /panel/,
  /modal/,
  /alert/
];

function findBootstrapFiles(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    // Skip node_modules and other common directories
    if (entry.name === 'node_modules' || 
        entry.name === '.git' || 
        entry.name === 'dist' ||
        entry.name === 'build') {
      continue;
    }

    if (entry.isDirectory()) {
      findBootstrapFiles(fullPath, results);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const hasBootstrap = bootstrapPatterns.some(pattern => pattern.test(content));
        
        if (hasBootstrap) {
          // Count occurrences
          const matches = bootstrapPatterns.filter(pattern => pattern.test(content)).length;
          results.push({
            file: fullPath,
            matches: matches
          });
        }
      } catch (err) {
        console.error(`Error reading ${fullPath}:`, err.message);
      }
    }
  }

  return results;
}

// Main execution
const searchDir = process.argv[2] || __dirname + '/../';
console.log(`Searching for Bootstrap usage in: ${searchDir}\n`);

const results = findBootstrapFiles(searchDir);

console.log(`Found ${results.length} files with Bootstrap usage:\n`);
results
  .sort((a, b) => b.matches - a.matches)
  .forEach((result, index) => {
    console.log(`${index + 1}. ${result.file} (${result.matches} patterns)`);
  });

// Export results to JSON
const outputFile = path.join(__dirname, 'bootstrap-files.json');
fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
console.log(`\nResults exported to: ${outputFile}`);

