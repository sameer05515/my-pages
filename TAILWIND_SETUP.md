# Tailwind CSS Setup Guide

Tailwind CSS has been added to this project. You can use it immediately via CDN, or set up a proper build process for production.

## Quick Start (CDN - Currently Active)

Tailwind CSS is already included via CDN in `src/index.html`. You can start using Tailwind classes immediately!

**Example:**
```html
<div class="bg-blue-500 text-white p-4 rounded-lg">
  Hello Tailwind!
</div>
```

## Production Setup (Recommended)

For better performance and smaller file sizes, use the npm build process:

### 1. Install Dependencies

```bash
npm install
```

This will install Tailwind CSS and its dependencies.

### 2. Build Tailwind CSS

**Development mode (watches for changes):**
```bash
npm run build:css
```

**Production mode (minified):**
```bash
npm run build:css:prod
```

### 3. Update HTML to Use Built CSS

Replace the CDN script in `src/index.html`:

**Remove this:**
```html
<script src="https://cdn.tailwindcss.com"></script>
```

**Add this instead:**
```html
<link rel="stylesheet" href="css/tailwind-output.css" />
```

## Configuration

Tailwind configuration is in `tailwind.config.js`. You can customize:

- **Content paths**: Where Tailwind should look for classes
- **Theme**: Colors, fonts, spacing, etc.
- **Plugins**: Additional Tailwind plugins

## Using Tailwind with Bootstrap

This project uses both Tailwind and Bootstrap. To prevent conflicts:

1. **Option 1**: Disable Tailwind's preflight (reset styles) in `tailwind.config.js`:
   ```js
   corePlugins: {
     preflight: false,
   }
   ```

2. **Option 2**: Use Tailwind's `prefix` option to namespace all Tailwind classes:
   ```js
   prefix: 'tw-',
   ```
   Then use classes like `tw-bg-blue-500` instead of `bg-blue-500`

## Custom Styles

Add custom Tailwind utilities and components in `src/css/tailwind.css`:

```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }
}
```

## Tailwind Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Tailwind UI Components](https://tailwindui.com/components)

## Examples

### Buttons
```html
<!-- Tailwind -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>

<!-- Bootstrap (existing) -->
<button class="btn btn-primary">Click me</button>
```

### Cards
```html
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Card Title</div>
    <p class="text-gray-700 text-base">Card content</p>
  </div>
</div>
```

### Responsive Design
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Notes

- The CDN version is great for development and quick prototyping
- For production, use the build process for smaller file sizes
- Tailwind classes work alongside Bootstrap classes - you can mix them!
- Use browser DevTools to experiment with Tailwind classes

