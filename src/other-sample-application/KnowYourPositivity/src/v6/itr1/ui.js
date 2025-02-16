import data from "./data.js";

const bootstrap = () => {
  let currentIndex = 0;
  const keys = Array.from(data.keys());

  const updateCard = () => {
    const { title, desc } = data.get(keys[currentIndex]);
    document.getElementById("title").textContent = title;
    document.getElementById("desc").textContent = desc;
  };

  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + keys.length) % keys.length;
    updateCard();
  });

  document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % keys.length;
    updateCard();
  });

  updateCard();
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  
  const themeToggle = document.getElementById("toggle-theme");
  const html = document.documentElement; // ✅ Use <html> instead of <body>

  // ✅ Load stored theme preference
  if (localStorage.getItem("know-your-potential-theme") === "dark") {
    html.classList.add("dark");
    themeToggle.textContent = "☀️ Light Mode";
  }

  // ✅ Toggle Dark Mode
  themeToggle.addEventListener("click", () => {
    console.log("Toggling theme...");
    html.classList.toggle("dark");

    const isDark = html.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("know-your-potential-theme", isDark ? "dark" : "light");
  });

  bootstrap();
});


document.addEventListener("contextmenu", event => event.preventDefault()); // Right-click disable
document.addEventListener("keydown", event => {
  if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
    event.preventDefault(); // Ctrl+U (View Source) block
  }
  if (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J" || event.key === "C")) {
    event.preventDefault(); // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C block
  }
});
