#!/usr/bin/env node

/**
 * Automated Bootstrap to Tailwind class replacement
 * Usage: node scripts/replace-bootstrap-classes.js [file] [--dry-run]
 * 
 * WARNING: Always review changes before committing!
 */

const fs = require('fs');
const path = require('path');

// Common Bootstrap to Tailwind class mappings
const classReplacements = {
  // Containers
  'container': 'container mx-auto px-4',
  'container-fluid': 'w-full px-4',
  'jumbotron': 'bg-white rounded-lg shadow-lg p-8 mb-8',
  
  // Grid
  'row': 'flex flex-wrap',
  'col-lg-12': 'w-full',
  'col-md-12': 'w-full md:w-full',
  'col-sm-12': 'w-full sm:w-full',
  'col-lg-6': 'w-full lg:w-1/2',
  'col-md-6': 'w-full md:w-1/2',
  'col-sm-6': 'w-full sm:w-1/2',
  'col-lg-4': 'w-full lg:w-1/3',
  'col-md-4': 'w-full md:w-1/3',
  'col-sm-4': 'w-full sm:w-1/3',
  'col-lg-3': 'w-full lg:w-1/4',
  'col-md-3': 'w-full md:w-1/4',
  
  // Buttons
  'btn btn-primary': 'px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors',
  'btn btn-success': 'px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors',
  'btn btn-danger': 'px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors',
  'btn btn-warning': 'px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors',
  'btn btn-info': 'px-4 py-2 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors',
  'btn btn-default': 'px-4 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors',
  'btn btn-sm': 'px-3 py-1 text-sm',
  'btn btn-lg': 'px-6 py-3 text-lg',
  'btn': 'px-4 py-2 rounded-lg font-semibold transition-colors',
  
  // Forms
  'form-control': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',
  'form-group': 'mb-4',
  'form-horizontal': 'space-y-4',
  'control-label': 'block text-sm font-medium text-gray-700 mb-1',
  'col-sm-offset-2': 'ml-0 md:ml-1/4',
  
  // Lists
  'list-group': 'bg-white border border-gray-200 rounded-lg divide-y divide-gray-200',
  'list-group-item': 'px-4 py-3',
  
  // Navigation
  'navbar': 'bg-white shadow-md',
  'navbar-nav': 'flex space-x-4',
  'nav-link': 'px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded',
  
  // Text
  'text-center': 'text-center',
  'text-left': 'text-left',
  'text-right': 'text-right',
  'text-muted': 'text-gray-500',
  
  // Utilities
  'pull-left': 'float-left',
  'pull-right': 'float-right',
  'hidden': 'hidden',
  'visible': 'block',
  'clearfix': 'clear-both',
};

// URL replacements
const urlReplacements = [
  {
    pattern: /http:\/\/127\.0\.0\.1:8888\/([^"']+)/g,
    replacement: '../../lib/js/$1'
  },
  {
    pattern: /http:\/\/127\.0\.0\.1:8080\/([^"']+)/g,
    replacement: '../../lib/$1'
  }
];

function replaceInFile(filePath, dryRun = false) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    const changes = [];
    
    // Replace Bootstrap classes
    for (const [bootstrapClass, tailwindClass] of Object.entries(classReplacements)) {
      const regex = new RegExp(`\\b${bootstrapClass.replace(/\s+/g, '\\s+')}\\b`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, tailwindClass);
        changes.push(`${bootstrapClass} → ${tailwindClass}`);
      }
    }
    
    // Replace hardcoded URLs
    urlReplacements.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        changes.push(`URL: ${pattern} → ${replacement}`);
      }
    });
    
    // Add Tailwind CDN if Bootstrap is present and Tailwind is not
    if (content.includes('bootstrap') && !content.includes('tailwindcss')) {
      const headMatch = content.match(/<head[^>]*>/i);
      if (headMatch) {
        const tailwindScript = '    <script src="https://cdn.tailwindcss.com"></script>\n';
        content = content.replace(headMatch[0], headMatch[0] + '\n' + tailwindScript);
        changes.push('Added Tailwind CDN');
      }
    }
    
    // Remove Bootstrap CSS/JS links
    const bootstrapLinkPattern = /<link[^>]*bootstrap[^>]*>/gi;
    if (bootstrapLinkPattern.test(content)) {
      content = content.replace(bootstrapLinkPattern, '');
      changes.push('Removed Bootstrap CSS links');
    }
    
    const bootstrapScriptPattern = /<script[^>]*bootstrap[^>]*><\/script>/gi;
    if (bootstrapScriptPattern.test(content)) {
      content = content.replace(bootstrapScriptPattern, '');
      changes.push('Removed Bootstrap JS scripts');
    }
    
    if (content !== originalContent) {
      if (!dryRun) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated: ${filePath}`);
      } else {
        console.log(`🔍 Would update: ${filePath}`);
      }
      changes.forEach(change => console.log(`   - ${change}`));
      return true;
    }
    
    return false;
  } catch (err) {
    console.error(`❌ Error processing ${filePath}:`, err.message);
    return false;
  }
}

// Main execution
const filePath = process.argv[2];
const dryRun = process.argv.includes('--dry-run');

if (!filePath) {
  console.log('Usage: node replace-bootstrap-classes.js [file] [--dry-run]');
  console.log('\nExample:');
  console.log('  node replace-bootstrap-classes.js template/form.html --dry-run');
  console.log('  node replace-bootstrap-classes.js template/form.html');
  process.exit(1);
}

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

console.log(dryRun ? '🔍 DRY RUN MODE - No files will be modified' : '⚠️  LIVE MODE - Files will be modified');
console.log(`Processing: ${filePath}\n`);

const updated = replaceInFile(filePath, dryRun);

if (!updated) {
  console.log('No changes needed.');
}

console.log('\n⚠️  IMPORTANT: Always review changes before committing!');
console.log('⚠️  Some manual adjustments may be required for complex layouts.');

