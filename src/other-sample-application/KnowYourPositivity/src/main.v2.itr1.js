import pages from "./utils/PageData.repository.js";

// Function to generate a single list item
const createListItem = ({ name, link, children }) => {
  const linkStr = link ? `<a href="${link}">${name}</a>` : `<b>${name}</b>`;
  return `
    <li class="list-group-item text-wrap">
      ${linkStr}
      ${children?.length ? createNestedList(children) : ""}
    </li>
  `;
};

// Function to generate a nested list
const createNestedList = (children) => `
  <ul class="list-group ml-2">
    ${getLinks(children)}
  </ul>
`;

// Main function to generate links
const getLinks = (pages = []) => pages.map(createListItem).join("");

// Injecting links inside the UL
const ulElement = document.getElementById("nav-links-on-home-page");
ulElement.innerHTML = getLinks(pages);

// Dark-Light Mode Toggle
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Function to toggle theme
function toggleTheme() {
  body.classList.toggle("dark-mode");
  ulElement.classList.toggle("dark-mode-ul"); // Apply dark mode to UL also
  const isDarkMode = body.classList.contains("dark-mode");
  themeToggleBtn.textContent = isDarkMode ? "🌙" : "🌞";
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Check and apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  ulElement.classList.add("dark-mode-ul"); // Apply dark mode to UL
  themeToggleBtn.textContent = "🌙";
}

// Event Listener for Toggle Button
themeToggleBtn.addEventListener("click", toggleTheme);
