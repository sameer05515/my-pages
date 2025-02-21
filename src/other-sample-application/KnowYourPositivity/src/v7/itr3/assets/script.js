import CardData, { AboutContent, HeaderContent } from "../data.js";

document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const keys = Array.from(CardData.keys());

  const updateCard = () => {
    const { title, desc } = CardData.get(keys[currentIndex]);
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

  updateCard(); // Initial card load

  // 🔅 Theme Toggle
  const themeToggle = document.getElementById("toggle-theme");
  const html = document.documentElement;

  if (localStorage.getItem("know-your-potential-theme") === "dark") {
    html.classList.add("dark");
    themeToggle.textContent = "☀️ Light Mode";
  }

  themeToggle.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");
    themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem(
      "know-your-potential-theme",
      isDark ? "dark" : "light"
    );
  });

  // 🔥 About Modal Handling
  const aboutModal = document.getElementById("about-modal");
  const aboutBtn = document.getElementById("about-btn");
  const closeModal = document.getElementById("close-modal");

  // const aboutContent = {
  //   title: "About Know Your Positivity",
  //   description: "This tool helps you unlock your inner power through motivational quotes! 🚀",
  //   why: "Because sometimes, all we need is a little push to see the brighter side of life! 🌟",
  // };

  aboutBtn.addEventListener("click", () => {
    aboutModal.querySelector("h2").textContent = AboutContent.title;
    aboutModal.querySelector(
      "p"
    ).innerHTML = `<strong>What:</strong> ${AboutContent.description}<br><br>
       <strong>Why:</strong> ${AboutContent.why}<br><br>
       <span style="font-size: 0.7rem; color: gray;">Version: ${AboutContent.version}</span>`;

    aboutModal.classList.remove("opacity-0", "pointer-events-none");
  });

  closeModal.addEventListener("click", () => {
    aboutModal.classList.add("opacity-0", "pointer-events-none");
  });

  closeModal.innerHTML = AboutContent.closeButtonTitle;

  // 🔒 Security: Disable Right Click & Inspect Element
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && ["u", "U", "I", "J"].includes(event.key)) {
      event.preventDefault();
    }
  });

  document.getElementById("kyp-header").innerHTML = HeaderContent.title;
});
