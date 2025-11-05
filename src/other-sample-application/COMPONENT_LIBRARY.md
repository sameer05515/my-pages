# Tailwind Component Library Reference

This document provides a comprehensive library of reusable Tailwind CSS components for the migration project.

## Table of Contents
1. [Buttons](#buttons)
2. [Forms](#forms)
3. [Cards](#cards)
4. [Navigation](#navigation)
5. [Modals](#modals)
6. [Tables](#tables)
7. [Alerts](#alerts)
8. [Badges](#badges)
9. [Progress Bars](#progress-bars)
10. [Tabs](#tabs)

---

## Buttons

### Primary Button
```html
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
  Primary Button
</button>
```

### Secondary Button
```html
<button class="px-4 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors">
  Secondary Button
</button>
```

### Success Button
```html
<button class="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
  Success Button
</button>
```

### Danger Button
```html
<button class="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors">
  Danger Button
</button>
```

### Outline Button
```html
<button class="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
  Outline Button
</button>
```

### Small Button
```html
<button class="px-3 py-1 text-sm bg-blue-500 text-white rounded font-semibold hover:bg-blue-600">
  Small Button
</button>
```

### Large Button
```html
<button class="px-6 py-3 text-lg bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
  Large Button
</button>
```

---

## Forms

### Text Input
```html
<input 
  type="text" 
  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  placeholder="Enter text">
```

### Text Input with Label
```html
<div>
  <label class="block text-sm font-medium text-gray-700 mb-1">Label</label>
  <input 
    type="text" 
    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
</div>
```

### Text Input with Error
```html
<div>
  <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
  <input 
    type="email" 
    class="w-full px-4 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
  <span class="text-red-500 text-sm mt-1 block">Error message</span>
</div>
```

### Select Dropdown
```html
<select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Textarea
```html
<textarea 
  rows="4"
  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Enter text"></textarea>
```

### Checkbox
```html
<div class="flex items-center">
  <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
  <label class="ml-2 text-sm text-gray-700">Checkbox label</label>
</div>
```

### Radio Button
```html
<div class="flex items-center">
  <input type="radio" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
  <label class="ml-2 text-sm text-gray-700">Radio label</label>
</div>
```

---

## Cards

### Simple Card
```html
<div class="bg-white rounded-lg shadow-md p-6">
  <h3 class="text-lg font-semibold mb-2">Card Title</h3>
  <p class="text-gray-600">Card content</p>
</div>
```

### Card with Header
```html
<div class="bg-white rounded-lg shadow-md overflow-hidden">
  <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
    <h3 class="text-lg font-semibold">Header</h3>
  </div>
  <div class="px-6 py-4">
    <p>Content</p>
  </div>
</div>
```

### Card with Footer
```html
<div class="bg-white rounded-lg shadow-md overflow-hidden">
  <div class="px-6 py-4">
    <p>Content</p>
  </div>
  <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
    <button class="px-4 py-2 bg-blue-500 text-white rounded">Action</button>
  </div>
</div>
```

---

## Navigation

### Top Navigation Bar
```html
<nav class="bg-white shadow-md">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <div class="text-xl font-bold">Logo</div>
      <div class="flex space-x-4">
        <a href="#" class="px-3 py-2 hover:bg-gray-100 rounded">Link 1</a>
        <a href="#" class="px-3 py-2 hover:bg-gray-100 rounded">Link 2</a>
      </div>
    </div>
  </div>
</nav>
```

### Sidebar Navigation
```html
<aside class="w-64 bg-white shadow-lg">
  <nav class="p-4">
    <ul class="space-y-2">
      <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 rounded">Item 1</a></li>
      <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 rounded">Item 2</a></li>
    </ul>
  </nav>
</aside>
```

### Breadcrumb
```html
<nav class="flex" aria-label="Breadcrumb">
  <ol class="flex items-center space-x-2">
    <li><a href="#" class="text-gray-500 hover:text-gray-700">Home</a></li>
    <li class="text-gray-400">/</li>
    <li class="text-gray-900 font-medium">Current</li>
  </ol>
</nav>
```

---

## Modals

### Basic Modal
```html
<div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
  <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
    <div class="px-6 py-4 border-b">
      <h3 class="text-lg font-semibold">Modal Title</h3>
    </div>
    <div class="px-6 py-4">Content</div>
    <div class="px-6 py-4 border-t flex justify-end space-x-3">
      <button class="px-4 py-2 border rounded">Cancel</button>
      <button class="px-4 py-2 bg-blue-500 text-white rounded">Confirm</button>
    </div>
  </div>
</div>
```

---

## Tables

### Basic Table
```html
<div class="overflow-x-auto">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm">John Doe</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm">john@example.com</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## Alerts

### Success Alert
```html
<div class="bg-green-50 border-l-4 border-green-400 p-4">
  <p class="text-sm text-green-700">Success message</p>
</div>
```

### Error Alert
```html
<div class="bg-red-50 border-l-4 border-red-400 p-4">
  <p class="text-sm text-red-700">Error message</p>
</div>
```

### Warning Alert
```html
<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
  <p class="text-sm text-yellow-700">Warning message</p>
</div>
```

### Info Alert
```html
<div class="bg-blue-50 border-l-4 border-blue-400 p-4">
  <p class="text-sm text-blue-700">Info message</p>
</div>
```

---

## Badges

### Primary Badge
```html
<span class="px-2 py-1 text-xs font-semibold bg-blue-500 text-white rounded">Badge</span>
```

### Success Badge
```html
<span class="px-2 py-1 text-xs font-semibold bg-green-500 text-white rounded">Success</span>
```

### Danger Badge
```html
<span class="px-2 py-1 text-xs font-semibold bg-red-500 text-white rounded">Danger</span>
```

---

## Progress Bars

### Basic Progress Bar
```html
<div class="w-full bg-gray-200 rounded-full h-2.5">
  <div class="bg-blue-500 h-2.5 rounded-full" style="width: 45%"></div>
</div>
```

### Progress Bar with Label
```html
<div>
  <div class="flex justify-between mb-1">
    <span class="text-sm font-medium">Progress</span>
    <span class="text-sm font-medium">45%</span>
  </div>
  <div class="w-full bg-gray-200 rounded-full h-2.5">
    <div class="bg-blue-500 h-2.5 rounded-full" style="width: 45%"></div>
  </div>
</div>
```

---

## Tabs

### Basic Tabs
```html
<div>
  <div class="border-b border-gray-200">
    <nav class="flex space-x-8">
      <button class="border-b-2 border-blue-500 py-4 px-1 text-sm font-medium text-blue-600">
        Tab 1
      </button>
      <button class="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700">
        Tab 2
      </button>
    </nav>
  </div>
  <div class="mt-4">
    <p>Tab content</p>
  </div>
</div>
```

---

## Usage Notes

1. **Copy and Paste**: These components can be copied directly into your HTML files
2. **Customization**: Modify colors, spacing, and sizes as needed
3. **AngularJS Integration**: Add `ng-*` directives as needed
4. **Responsive**: Components are mobile-first and responsive
5. **Accessibility**: Ensure proper ARIA labels and semantic HTML

---

**Last Updated**: Phase 1 Implementation  
**Version**: 1.0

