import data from "../data.js";

document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const keys = Array.from(data.keys());

  const updateCard = () => {
    const { title, desc } = data.get(keys[currentIndex]);
    // document.getElementById("title").textContent = title;
    // document.getElementById("desc").textContent = desc;
    document.getElementById("title").innerHTML = title;
    document.getElementById("desc").innerHTML = desc;
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

  // Theme Toggle
  const themeToggle = document.getElementById("toggle-theme");
  const html = document.documentElement;

  if (localStorage.getItem("know-your-potential-theme") === "dark") {
    html.classList.add("dark");
    themeToggle.textContent = "☀️ Light Mode";
  }

  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem(
      "know-your-potential-theme",
      isDark ? "dark" : "light"
    );
  });

  // About Modal
  // const aboutBtn = document.getElementById("about-btn");
  // const closeModal = document.getElementById("close-modal");
  // const aboutModal = document.getElementById("about-modal");

  // aboutBtn.addEventListener("click", () => aboutModal.classList.remove("hidden"));
  // closeModal.addEventListener("click", () => aboutModal.classList.add("hidden"));

  const aboutModal = document.getElementById("about-modal");
  const aboutBtn = document.getElementById("about-btn");
  const closeModal = document.getElementById("close-modal");

  // WHY content stored separately for easy updates
  const aboutContent = {
    title: "About Know Your Positivity",
    description:
      "This tool helps you unlock your inner power through motivational quotes! 🚀",
    why: "Because sometimes, all we need is a little push to see the brighter side of life! 🌟",
  };

  aboutBtn.addEventListener("click", () => {
    aboutModal.classList.remove("opacity-0", "pointer-events-none");
    aboutModal.querySelector("h2").textContent = aboutContent.title;
    aboutModal.querySelector(
      "p"
    ).innerHTML = `<strong>What:</strong> ${aboutContent.description}<br><br>
             <strong>Why:</strong> ${aboutContent.why}`;
    aboutModal.classList.remove("opacity-0", "pointer-events-none");
  });

  closeModal.addEventListener("click", () => {
    aboutModal.classList.add("opacity-0", "pointer-events-none");
  });

  // Security: Disable Right Click & Inspect Element
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && ["u", "U", "I", "J", "C"].includes(event.key))
      event.preventDefault();
  });
});
