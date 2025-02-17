import pages from "./utils/PageData.repository.js";

// Function to generate a single list item
const createListItem = ({ name, link, children }) => {
  const linkStr = link ? `<a href="${link}">${name}</a> ` : `<b>${name}</b>`;
  const aa = `
    <li class="list-group-item text-wrap">           
      ${linkStr}
      ${children?.length ? createNestedList(children) : ""}
    </li>
  `;

  return aa;
};

// Function to generate a nested list
const createNestedList = (children) => `
    <ul class="list-group ml-2">
      ${getLinks(children)}
    </ul>
  `;

// Main function to generate links
const getLinks = (pages = []) => pages.map(createListItem).join("");

const ulElement = document.getElementById("nav-links-on-home-page");

ulElement.innerHTML += getLinks(pages);

// Dark-Light Mode Toggle
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

function toggleTheme() {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  themeToggleBtn.textContent = isDarkMode ? "🌙" : "🌞";
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Check saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggleBtn.textContent = "🌙";
}

themeToggleBtn.addEventListener("click", toggleTheme);
