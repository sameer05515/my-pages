// ui.js
import { store, NEXT, PREV } from "./Store.js";
import SastaDBService from "./SastaDBService.js";

const sectionEl = document.getElementById("sectionName");
const sentenceEl = document.getElementById("sentence");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const aboutBtn = document.getElementById("aboutBtn");
const modalBackdrop = document.getElementById("modalBackdrop");
const aboutModal = document.getElementById("aboutModal");
const closeModalBtn = document.getElementById("closeModal");
const aboutContent = document.getElementById("aboutContent");

// ✅ UI Update Function
function updateUI() {
  const { selectedId } = store.getState();
  const sentenceData = SastaDBService.getSentenceById(selectedId);

  if (!sentenceData) {
    console.error("Sentence not found:", selectedId);
    return;
  }

  const sectionData = SastaDBService.getSectionById(sentenceData.parentSectionId);

  // ✅ Update UI Elements
  sectionEl.textContent = sectionData ? sectionData.title : "Unknown Section";
  sentenceEl.innerHTML = `<div class="prose prose-sm text-gray-700 my-3">${marked.parse(sentenceData.text)}</div>`;

  // ✅ Trigger fade-in animation
  sentenceEl.classList.remove("fade-enter-active");
  void sentenceEl.offsetWidth; // Forces reflow
  sentenceEl.classList.add("fade-enter-active");
}

// ✅ Subscribe UI to Redux Store
store.subscribe(updateUI);

// ✅ Event Listeners
prevBtn.addEventListener("click", () => store.dispatch({ type: PREV }));
nextBtn.addEventListener("click", () => store.dispatch({ type: NEXT }));

// Sync footer buttons with header buttons
document.getElementById("prevBtnFooter").addEventListener("click", () => prevBtn.click());
document.getElementById("nextBtnFooter").addEventListener("click", () => nextBtn.click());

// ✅ About Button Click Event
aboutBtn.addEventListener("click", async () => {
  modalBackdrop.style.display = "block";
  aboutModal.style.display = "block";
  
  try {
    const response = await fetch("http://localhost:3000/v2/api/smart-content/itr1/15Feb2025.know-your-positivity--about-this-module--index-v1-md");
    if (!response.ok) throw new Error("Failed to fetch About content.");

    const finalResponse = await response.json();
    aboutContent.innerHTML = marked.parse(finalResponse.content);
  } catch (error) {
    aboutContent.innerHTML = `<p class="text-red-500">Oops! Unable to fetch About content. Please try again later.</p>`;
  }
});

// ✅ Close Modal
closeModalBtn.addEventListener("click", closeAboutModal);
modalBackdrop.addEventListener("click", closeAboutModal);

function closeAboutModal() {
  modalBackdrop.style.display = "none";
  aboutModal.style.display = "none";
}

// 3️⃣ Dark Mode JavaScript
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.contains("dark")
    ? (themeToggle.innerHTML = '<i class="bi bi-sun"></i>')
    : (themeToggle.innerHTML = '<i class="bi bi-moon-stars"></i>');
});


// ✅ Initial Render
updateUI();
