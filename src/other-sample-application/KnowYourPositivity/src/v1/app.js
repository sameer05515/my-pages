import { data } from "./data.js";
import { updateContent } from "./utils.js";

let currentIndex = 0;

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateContent(currentIndex, data);
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentIndex < data.length - 1) {
        currentIndex++;
        updateContent(currentIndex, data);
    }
});

// Initial render
updateContent(currentIndex, data);
