# Tailwind CSS Migration Guide for other-sample-application

This guide provides instructions for migrating Bootstrap to Tailwind CSS across the `other-sample-application` folder.

## Overview

The `other-sample-application` folder contains 1300+ HTML files. This guide provides:
- Migration patterns for common Bootstrap components
- Examples of converted files
- Automated approach for bulk conversion

## Common Bootstrap to Tailwind Conversions

### Layout & Containers

| Bootstrap | Tailwind |
|-----------|----------|
| `container` | `container mx-auto px-4` |
| `container-fluid` | `w-full px-4` |
| `row` | `flex flex-wrap` or `grid grid-cols-*` |
| `col-lg-12` | `w-full lg:w-full` |
| `col-md-6` | `w-full md:w-1/2` |
| `col-sm-4` | `w-full sm:w-1/3` |

### Buttons

| Bootstrap | Tailwind |
|-----------|----------|
| `btn` | `px-4 py-2 rounded font-semibold transition-colors` |
| `btn-primary` | `bg-blue-500 text-white hover:bg-blue-600` |
| `btn-success` | `bg-green-500 text-white hover:bg-green-600` |
| `btn-danger` | `bg-red-500 text-white hover:bg-red-600` |
| `btn-warning` | `bg-yellow-500 text-white hover:bg-yellow-600` |
| `btn-info` | `bg-cyan-500 text-white hover:bg-cyan-600` |
| `btn-sm` | `text-sm px-3 py-1` |
| `btn-lg` | `text-lg px-6 py-3` |

### Forms

| Bootstrap | Tailwind |
|-----------|----------|
| `form-control` | `w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500` |
| `form-group` | `mb-4` |
| `form-horizontal` | `space-y-4` |
| `control-label` | `block text-sm font-medium text-gray-700 mb-1` |
| `col-sm-offset-2` | `ml-auto` or use flexbox gap |

### Lists & Navigation

| Bootstrap | Tailwind |
|-----------|----------|
| `list-group` | `bg-white border border-gray-200 rounded-lg divide-y divide-gray-200` |
| `list-group-item` | `px-4 py-3` |
| `nav` | `flex space-x-4` |
| `navbar` | `bg-white shadow-md` |
| `navbar-nav` | `flex space-x-4` |

### Cards & Panels

| Bootstrap | Tailwind |
|-----------|----------|
| `panel` | `bg-white border border-gray-200 rounded-lg shadow` |
| `panel-heading` | `px-4 py-3 bg-gray-50 border-b border-gray-200` |
| `panel-body` | `px-4 py-4` |
| `card` | `bg-white rounded-lg shadow-md overflow-hidden` |

### Utilities

| Bootstrap | Tailwind |
|-----------|----------|
| `text-center` | `text-center` |
| `text-left` | `text-left` |
| `text-right` | `text-right` |
| `pull-left` | `float-left` |
| `pull-right` | `float-right` |
| `hidden` | `hidden` |
| `show` | `block` |
| `ml-5` | `ml-5` |
| `mt-3` | `mt-3` |
| `mb-4` | `mb-4` |

## Migration Steps

### Step 1: Add Tailwind CDN

Add to `<head>` section:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

### Step 2: Remove Bootstrap

Remove Bootstrap CSS and JS:
```html
<!-- Remove these -->
<link href="bootstrap.min.css" rel="stylesheet">
<script src="bootstrap.min.js"></script>
```

### Step 3: Replace Classes

Replace Bootstrap classes with Tailwind equivalents using the conversion table above.

### Step 4: Update Hardcoded URLs

Replace hardcoded localhost URLs:
```html
<!-- Before -->
<script src="http://127.0.0.1:8888/angular-1.5.5/angular.min.js"></script>

<!-- After -->
<script src="../../lib/js/angular-1.5.5/angular.min.js"></script>
```

## Example Conversions

### Example 1: Simple Form

**Before (Bootstrap):**
```html
<form class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-2 control-label">Name</label>
    <div class="col-sm-4">
      <input class="form-control" placeholder="Name">
    </div>
  </div>
  <button class="btn btn-primary">Submit</button>
</form>
```

**After (Tailwind):**
```html
<form class="space-y-4">
  <div class="mb-4">
    <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
    <input class="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
           placeholder="Name">
  </div>
  <button class="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
    Submit
  </button>
</form>
```

### Example 2: Navigation List

**Before (Bootstrap):**
```html
<ul class="list-group ml-5">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
</ul>
```

**After (Tailwind):**
```html
<ul class="bg-white border border-gray-200 rounded-lg divide-y divide-gray-200 ml-5">
  <li class="px-4 py-3">Item 1</li>
  <li class="px-4 py-3">Item 2</li>
</ul>
```

## Priority Files

Files that should be migrated first:
1. Main `index.html` files in each subdirectory
2. Files explicitly using Bootstrap (found via grep)
3. Files that are actively used/referenced
4. Demo/example files

## Automated Migration Script

For bulk migration, consider creating a Node.js script that:
1. Finds all HTML files
2. Replaces Bootstrap classes using regex patterns
3. Adds Tailwind CDN if not present
4. Removes Bootstrap CSS/JS links

## Files Already Migrated

- `template/form.html` - Form example with Tailwind
- `angular-1-5-component-with-controller/index.html` - Basic Angular component
- `Create-Custom-Elements/index.html` - Simple navigation

## Notes

- Some Angular UI Bootstrap components may still need Bootstrap CSS for modal functionality
- Custom CSS files may need adjustment
- Test thoroughly after migration
- Keep Tailwind CDN for now, migrate to build process later if needed

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- Main project Tailwind setup: `../TAILWIND_SETUP.md`

