import LanguageData from "../languageConfig.js";

document.addEventListener("DOMContentLoaded", () => {
  let lang = localStorage.getItem("appLanguage") || "en";
  let { CardData, AboutContent, HeaderContent, ThanksNote } = LanguageData[lang];

  const updateLanguage = () => {
    ({ CardData, AboutContent, HeaderContent, ThanksNote } = LanguageData[lang]);

    // 🔹 Update Card Content
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

    // 🔹 Update Header
    document.getElementById("kyp-header").innerHTML = HeaderContent.title;

    // 🔹 Update About Modal
    document.getElementById("about-btn").addEventListener("click", () => {
      const aboutModal = document.getElementById("about-modal");
      aboutModal.querySelector("h2").textContent = AboutContent.title;
      aboutModal.querySelector("p").innerHTML = `
        <strong>What:</strong> ${AboutContent.description}<br><br>
        <strong>Why:</strong> ${AboutContent.why}<br><br>
        <span style="font-size: 0.7rem; color: gray;">Version: ${AboutContent.version}</span>
      `;
      aboutModal.classList.remove("opacity-0", "pointer-events-none");
    });

    document.getElementById("close-modal").innerHTML = AboutContent.closeButtonTitle;

    // 🔹 Update Thank You Note
    document.getElementById("thanksNote").innerText = ThanksNote;

    // 🔹 Update Language Switcher Button
    document.getElementById("langSwitch").innerText = lang === "en" ? "🇮🇳 हिंदी" : "🇬🇧 English";
  };

  // 🔄 Language Switcher Event
  document.getElementById("langSwitch").addEventListener("click", () => {
    lang = lang === "en" ? "hi" : "en";
    localStorage.setItem("appLanguage", lang);
    updateLanguage();
  });

  updateLanguage();
});
