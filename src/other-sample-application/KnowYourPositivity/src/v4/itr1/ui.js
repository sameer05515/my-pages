// ui.js
import { store, NEXT, PREV } from "./store.js";

const sectionEl = document.getElementById("sectionName");
const sentenceEl = document.getElementById("sentence");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// UI Update Function
function updateUI() {
  const { currentIndex, data } = store.getState();
  sectionEl.textContent = data[currentIndex].section;
  sentenceEl.textContent = data[currentIndex].sentence;

  // Trigger fade-in animation
  sentenceEl.classList.remove("fade-enter-active");
  void sentenceEl.offsetWidth; // Forces reflow
  sentenceEl.classList.add("fade-enter-active");

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === data.length - 1;
}

// Subscribe UI to Redux Store
store.subscribe(updateUI);

// Event Listeners
prevBtn.addEventListener("click", () => store.dispatch({ type: PREV }));
nextBtn.addEventListener("click", () => store.dispatch({ type: NEXT }));

// Initial Render
updateUI();
