// utils.js

export function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .substring(0, 30); // Limit length
}
