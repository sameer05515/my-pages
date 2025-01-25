import bootstrap from "./updateCard.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  
  const themeToggle = document.getElementById("toggle-theme");
  const html = document.documentElement; // ✅ Use <html> instead of <body>

  // ✅ Load stored theme preference
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    themeToggle.textContent = "☀️ Light Mode";
  }

  // ✅ Toggle Dark Mode
  themeToggle.addEventListener("click", () => {
    console.log("Toggling theme...");
    html.classList.toggle("dark");

    const isDark = html.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  bootstrap();
});
