import Builder from "./Builder.js";

// Example Usage:
const builder = new Builder();
builder.addSection("Growth Mindset", [
  "Discomfort is a signal for growth; embrace the force push forward.",
  "Success is a result of consistent mastery push in any field.",
]);

builder.addSection("Learning Process", [
  "Improvement becomes enjoyable when seen as a fun push.",
  "Overcoming a plateau requires an intentional push towards new challenges.",
]);

// Render Sections
builder.render("content");
