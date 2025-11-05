# Common Patterns and Solutions for Tailwind Migration

This document provides common patterns, solutions, and best practices encountered during the Bootstrap to Tailwind CSS migration.

## Table of Contents
1. [Layout Patterns](#layout-patterns)
2. [Form Patterns](#form-patterns)
3. [Navigation Patterns](#navigation-patterns)
4. [Component Patterns](#component-patterns)
5. [Common Issues & Solutions](#common-issues--solutions)
6. [AngularJS Integration](#angularjs-integration)
7. [Responsive Design Patterns](#responsive-design-patterns)

---

## Layout Patterns

### Container Patterns

#### Bootstrap Container → Tailwind
```html
<!-- Bootstrap -->
<div class="container">
  Content
</div>

<!-- Tailwind -->
<div class="container mx-auto px-4">
  Content
</div>
```

#### Bootstrap Container Fluid → Tailwind
```html
<!-- Bootstrap -->
<div class="container-fluid">
  Content
</div>

<!-- Tailwind -->
<div class="w-full px-4">
  Content
</div>
```

#### Bootstrap Jumbotron → Tailwind
```html
<!-- Bootstrap -->
<div class="jumbotron">
  <h1>Title</h1>
</div>

<!-- Tailwind -->
<div class="bg-white rounded-lg shadow-lg p-8 mb-8">
  <h1 class="text-4xl font-bold mb-4">Title</h1>
</div>
```

### Grid System Patterns

#### Bootstrap Row/Col → Tailwind Flex
```html
<!-- Bootstrap -->
<div class="row">
  <div class="col-md-6">Left</div>
  <div class="col-md-6">Right</div>
</div>

<!-- Tailwind -->
<div class="flex flex-wrap gap-4">
  <div class="w-full md:w-1/2">Left</div>
  <div class="w-full md:w-1/2">Right</div>
</div>
```

#### Bootstrap Row/Col → Tailwind Grid
```html
<!-- Bootstrap -->
<div class="row">
  <div class="col-md-4">Item 1</div>
  <div class="col-md-4">Item 2</div>
  <div class="col-md-4">Item 3</div>
</div>

<!-- Tailwind -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## Form Patterns

### Basic Form Structure

```html
<!-- Tailwind Form Template -->
<form class="bg-white p-6 rounded-lg shadow-md space-y-4" ng-controller="FormController">
  <!-- Form Group -->
  <div class="mb-4">
    <label for="fieldName" class="block text-sm font-medium text-gray-700 mb-1">
      Field Label
    </label>
    <input 
      type="text" 
      id="fieldName"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      ng-model="formData.fieldName"
      placeholder="Enter value">
    <span ng-show="errors.fieldName" class="text-red-500 text-sm mt-1 block">
      {{errors.fieldName}}
    </span>
  </div>
  
  <!-- Submit Button -->
  <div class="flex justify-end">
    <button 
      type="submit"
      class="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
      Submit
    </button>
  </div>
</form>
```

### Form Validation States

```html
<!-- Valid State -->
<input class="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500">

<!-- Error State -->
<input class="w-full px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500">
<span class="text-red-500 text-sm">Error message</span>

<!-- Disabled State -->
<input class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed" disabled>
```

### Horizontal Form Layout

```html
<!-- Bootstrap Horizontal Form -->
<div class="form-group">
  <label class="col-sm-2 control-label">Name</label>
  <div class="col-sm-4">
    <input class="form-control">
  </div>
</div>

<!-- Tailwind Horizontal Form -->
<div class="flex flex-wrap items-center mb-4">
  <label class="w-full sm:w-1/4 text-sm font-medium text-gray-700 mb-2 sm:mb-0">
    Name
  </label>
  <div class="w-full sm:w-3/4">
    <input class="w-full px-4 py-2 border border-gray-300 rounded-lg">
  </div>
</div>
```

---

## Navigation Patterns

### Simple Navigation List

```html
<!-- Bootstrap List Group -->
<ul class="list-group">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
</ul>

<!-- Tailwind Navigation List -->
<ul class="bg-white border border-gray-200 rounded-lg divide-y divide-gray-200">
  <li class="px-4 py-3 hover:bg-gray-50 cursor-pointer">Item 1</li>
  <li class="px-4 py-3 hover:bg-gray-50 cursor-pointer">Item 2</li>
</ul>
```

### Navigation Links

```html
<!-- Bootstrap Nav -->
<nav class="navbar">
  <ul class="navbar-nav">
    <li><a href="#" class="nav-link">Home</a></li>
    <li><a href="#" class="nav-link">About</a></li>
  </ul>
</nav>

<!-- Tailwind Nav -->
<nav class="bg-white shadow-md">
  <ul class="flex space-x-4 px-4 py-3">
    <li><a href="#" class="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded">Home</a></li>
    <li><a href="#" class="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded">About</a></li>
  </ul>
</nav>
```

### Breadcrumb Navigation

```html
<!-- Tailwind Breadcrumb -->
<nav class="flex" aria-label="Breadcrumb">
  <ol class="flex items-center space-x-2">
    <li><a href="#" class="text-gray-500 hover:text-gray-700">Home</a></li>
    <li class="text-gray-400">/</li>
    <li><a href="#" class="text-gray-500 hover:text-gray-700">Category</a></li>
    <li class="text-gray-400">/</li>
    <li class="text-gray-900 font-medium">Current</li>
  </ol>
</nav>
```

---

## Component Patterns

### Card Component

```html
<!-- Tailwind Card -->
<div class="bg-white rounded-lg shadow-md overflow-hidden">
  <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
    <h3 class="text-lg font-semibold text-gray-800">Card Title</h3>
  </div>
  <div class="px-6 py-4">
    <p class="text-gray-700">Card content goes here</p>
  </div>
  <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
    <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Action
    </button>
  </div>
</div>
```

### Alert/Notification Component

```html
<!-- Success Alert -->
<div class="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
  <div class="flex">
    <div class="ml-3">
      <p class="text-sm text-green-700">Success message here</p>
    </div>
  </div>
</div>

<!-- Error Alert -->
<div class="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
  <div class="flex">
    <div class="ml-3">
      <p class="text-sm text-red-700">Error message here</p>
    </div>
  </div>
</div>

<!-- Warning Alert -->
<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
  <div class="flex">
    <div class="ml-3">
      <p class="text-sm text-yellow-700">Warning message here</p>
    </div>
  </div>
</div>
```

### Modal Pattern (with Angular UI Bootstrap)

```html
<!-- Note: Angular UI Bootstrap modals may still need Bootstrap CSS -->
<!-- For pure Tailwind modal, use custom implementation -->
<div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
  <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
    <div class="px-6 py-4 border-b border-gray-200">
      <h3 class="text-lg font-semibold">Modal Title</h3>
    </div>
    <div class="px-6 py-4">
      Modal content
    </div>
    <div class="px-6 py-4 border-t border-gray-200 flex justify-end space-x-2">
      <button class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Cancel</button>
      <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Confirm</button>
    </div>
  </div>
</div>
```

### Table Pattern

```html
<!-- Tailwind Table -->
<div class="overflow-x-auto">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Email
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">John Doe</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john@example.com</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## Common Issues & Solutions

### Issue 1: Angular UI Bootstrap Dependencies

**Problem**: Angular UI Bootstrap components may require Bootstrap CSS for modals, tooltips, etc.

**Solution**: 
- Keep minimal Bootstrap CSS for specific components only
- Or use Tailwind alternatives for modals
- Or create custom Tailwind-based modal directives

```html
<!-- Option 1: Keep Bootstrap CSS for modals only -->
<link rel="stylesheet" href="bootstrap-modal-only.css">

<!-- Option 2: Use Tailwind modal -->
<!-- See Modal Pattern above -->
```

### Issue 2: Custom CSS Conflicts

**Problem**: Custom CSS may conflict with Tailwind's reset styles.

**Solution**:
- Use Tailwind's `@layer` directive for custom styles
- Prefix custom classes to avoid conflicts
- Review and refactor custom CSS

```css
/* In custom CSS file */
@layer components {
  .custom-component {
    /* Custom styles */
  }
}
```

### Issue 3: ng-show/ng-hide with Tailwind

**Problem**: Angular's `ng-hide` class may conflict with Tailwind.

**Solution**: Use Tailwind's `hidden` class with ng-show:

```html
<!-- Good -->
<div ng-show="isVisible" class="block">Visible</div>
<div ng-show="!isVisible" class="hidden">Hidden</div>

<!-- Or use ng-class -->
<div ng-class="{'hidden': !isVisible, 'block': isVisible}">Content</div>
```

### Issue 4: Inline Styles vs Tailwind

**Problem**: Some components use inline styles with ng-style.

**Solution**: Prefer Tailwind classes, use ng-style only when necessary:

```html
<!-- Instead of -->
<div ng-style="{'margin': '10px', 'padding': '20px'}">

<!-- Use Tailwind -->
<div class="m-2.5 p-5">
```

### Issue 5: Hardcoded URLs

**Problem**: Hardcoded localhost URLs break when deployed.

**Solution**: Use relative paths:

```html
<!-- Before -->
<script src="http://127.0.0.1:8888/angular-1.5.5/angular.min.js"></script>

<!-- After -->
<script src="../../lib/js/angular-1.5.5/angular.min.js"></script>
```

---

## AngularJS Integration

### ng-repeat with Tailwind

```html
<!-- List with ng-repeat -->
<ul class="space-y-2">
  <li ng-repeat="item in items track by $index" 
      class="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
    {{item.name}}
  </li>
</ul>
```

### ng-class with Tailwind

```html
<!-- Dynamic classes -->
<button ng-class="{
  'bg-blue-500': isActive,
  'bg-gray-500': !isActive,
  'text-white': true,
  'hover:bg-blue-600': isActive
}">
  Button
</button>
```

### ng-style with Tailwind (when necessary)

```html
<!-- Use Tailwind when possible -->
<div class="p-4" ng-style="dynamicStyles">
  <!-- Only use ng-style for truly dynamic values -->
</div>
```

### Form Validation with AngularJS

```html
<form name="myForm" class="space-y-4">
  <div>
    <input 
      name="email"
      type="email"
      ng-model="user.email"
      required
      class="w-full px-4 py-2 border rounded-lg"
      ng-class="{
        'border-red-300': myForm.email.$invalid && myForm.email.$dirty,
        'border-green-300': myForm.email.$valid && myForm.email.$dirty
      }">
    <span ng-show="myForm.email.$invalid && myForm.email.$dirty" 
          class="text-red-500 text-sm">
      Invalid email
    </span>
  </div>
</form>
```

---

## Responsive Design Patterns

### Mobile-First Approach

```html
<!-- Tailwind uses mobile-first -->
<div class="
  w-full          <!-- Mobile: full width -->
  sm:w-1/2        <!-- Small screens: half width -->
  md:w-1/3        <!-- Medium screens: third width -->
  lg:w-1/4        <!-- Large screens: quarter width -->
">
  Content
</div>
```

### Responsive Navigation

```html
<!-- Mobile: Hamburger Menu -->
<!-- Desktop: Horizontal Menu -->
<nav class="bg-white shadow-md">
  <div class="md:hidden">
    <!-- Mobile menu button -->
    <button class="p-2">☰</button>
  </div>
  <ul class="hidden md:flex space-x-4">
    <li><a href="#">Link</a></li>
  </ul>
</nav>
```

### Responsive Grid

```html
<!-- 1 column on mobile, 2 on tablet, 3 on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## Best Practices

### 1. Use Tailwind's Utility Classes
- Prefer utility classes over custom CSS
- Use `@apply` for repeated patterns
- Create component classes for complex patterns

### 2. Maintain Consistency
- Use design tokens (colors, spacing) consistently
- Follow the same patterns across similar components
- Document custom patterns

### 3. Performance
- Use CDN for development
- Consider build process for production
- Purge unused styles

### 4. Accessibility
- Use semantic HTML
- Maintain proper contrast ratios
- Ensure keyboard navigation works
- Test with screen readers

### 5. Testing
- Test responsive behavior
- Verify AngularJS functionality
- Check browser compatibility
- Validate HTML

---

## Quick Reference

### Common Class Conversions

| Bootstrap | Tailwind |
|-----------|----------|
| `text-center` | `text-center` |
| `text-left` | `text-left` |
| `pull-left` | `float-left` |
| `pull-right` | `float-right` |
| `hidden` | `hidden` |
| `visible` | `block` or remove `hidden` |
| `clearfix` | `clear-both` |
| `sr-only` | `sr-only` |

### Spacing

| Bootstrap | Tailwind |
|-----------|----------|
| `m-1` | `m-1` (same) |
| `p-2` | `p-2` (same) |
| `mt-3` | `mt-3` (same) |
| `mb-4` | `mb-4` (same) |

---

**Last Updated**: Phase 1 Implementation  
**Version**: 1.0

