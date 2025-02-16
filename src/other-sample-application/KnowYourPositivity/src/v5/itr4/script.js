document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM Loaded!");

  const themeToggle = document.getElementById("toggle-theme");

  // ✅ Load Theme from LocalStorage
  if (localStorage.getItem("know-your-potential-theme") === "dark") {
    document.documentElement.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light Mode";
  }

  // ✅ Toggle Theme on Click
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");

    // ✅ Update Button Text
    const isDark = document.documentElement.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

    // ✅ Store Preference
    localStorage.setItem("know-your-potential-theme", isDark ? "dark" : "light");
  });
});
