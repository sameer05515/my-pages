# Migration Scripts

This directory contains automation scripts to assist with the Bootstrap to Tailwind CSS migration.

## Scripts

### 1. find-bootstrap-files.js

Finds all HTML files that use Bootstrap classes or references.

**Usage:**
```bash
# Search current directory and subdirectories
node scripts/find-bootstrap-files.js

# Search specific directory
node scripts/find-bootstrap-files.js path/to/directory
```

**Output:**
- Lists all files with Bootstrap usage
- Sorted by number of Bootstrap patterns found
- Exports results to `bootstrap-files.json`

**Example:**
```bash
$ node scripts/find-bootstrap-files.js
Searching for Bootstrap usage in: /path/to/directory

Found 25 files with Bootstrap usage:

1. template/form.html (5 patterns)
2. KnowYourPositivity/src/index.html (3 patterns)
...
```

---

### 2. replace-bootstrap-classes.js

Automatically replaces Bootstrap classes with Tailwind equivalents and fixes common issues.

**⚠️ WARNING: Always use --dry-run first to review changes!**

**Usage:**
```bash
# Dry-run (preview changes without modifying file)
node scripts/replace-bootstrap-classes.js file.html --dry-run

# Apply changes (after reviewing dry-run)
node scripts/replace-bootstrap-classes.js file.html
```

**What it does:**
- Replaces Bootstrap classes with Tailwind equivalents
- Fixes hardcoded localhost URLs
- Adds Tailwind CDN if Bootstrap is present
- Removes Bootstrap CSS/JS links

**Example:**
```bash
# Preview changes
$ node scripts/replace-bootstrap-classes.js template/form.html --dry-run
🔍 DRY RUN MODE - No files will be modified
Processing: template/form.html

🔍 Would update: template/form.html
   - btn btn-primary → px-4 py-2 bg-blue-500...
   - form-control → w-full px-4 py-2...
   - Added Tailwind CDN
   - Removed Bootstrap CSS links

# Apply changes
$ node scripts/replace-bootstrap-classes.js template/form.html
⚠️  LIVE MODE - Files will be modified
Processing: template/form.html

✅ Updated: template/form.html
   - btn btn-primary → px-4 py-2 bg-blue-500...
   ...
```

**Important Notes:**
- Always review changes before committing
- Some manual adjustments may be required for complex layouts
- Script handles common patterns but not all edge cases
- Test the file after running the script

---

## Class Replacements

The `replace-bootstrap-classes.js` script handles these common replacements:

### Containers
- `container` → `container mx-auto px-4`
- `container-fluid` → `w-full px-4`
- `jumbotron` → `bg-white rounded-lg shadow-lg p-8 mb-8`

### Grid
- `row` → `flex flex-wrap`
- `col-lg-12` → `w-full`
- `col-md-6` → `w-full md:w-1/2`
- etc.

### Buttons
- `btn btn-primary` → Tailwind button classes
- `btn btn-success` → Tailwind button classes
- etc.

### Forms
- `form-control` → Tailwind input classes
- `form-group` → `mb-4`
- etc.

See `../TAILWIND_MIGRATION_GUIDE.md` for complete mapping.

---

## Best Practices

1. **Always use dry-run first**
   ```bash
   node scripts/replace-bootstrap-classes.js file.html --dry-run
   ```

2. **Review changes carefully**
   - Check the output for unexpected replacements
   - Verify the file structure is maintained

3. **Test after migration**
   - Open the file in a browser
   - Test all functionality
   - Verify responsive behavior

4. **Manual adjustments**
   - Complex layouts may need manual tweaking
   - Custom CSS may need adjustment
   - AngularJS directives may need updates

5. **Version control**
   - Commit changes in small batches
   - Use descriptive commit messages
   - Keep backups of original files

---

## Troubleshooting

### Script doesn't find files
- Check file path is correct
- Ensure file has `.html` extension
- Verify you're in the correct directory

### Unexpected replacements
- Review the class mappings in the script
- Check for edge cases
- Manually adjust if needed

### Script errors
- Check Node.js version (requires Node.js 12+)
- Verify file permissions
- Check for syntax errors in the HTML file

---

## Contributing

To improve the scripts:
1. Test with various file types
2. Add more class mappings if needed
3. Update documentation
4. Submit improvements

---

**Last Updated**: Phase 1 Implementation  
**Version**: 1.0

