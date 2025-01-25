// ui.js
import { store, NEXT, PREV } from "./Store.js";
import SastaDBService from "./SastaDBService.js";

const sectionEl = document.getElementById("sectionName");
const sentenceEl = document.getElementById("sentence");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

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
  sentenceEl.innerHTML=`<div class="text-gray-700 my-3">${marked.parse(sentenceData.text)}</div>`

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

// ✅ Initial Render
updateUI();
