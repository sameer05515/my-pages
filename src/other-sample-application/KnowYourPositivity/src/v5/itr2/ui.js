import data from "./data.js";

const dataArray = Array.from(data.values());
let currentIndex = 0;

const updateCard = () => {
  document.getElementById("title").textContent = dataArray[currentIndex].title;
  document.getElementById("desc").textContent = dataArray[currentIndex].desc;
};

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + dataArray.length) % dataArray.length;
  updateCard();
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % dataArray.length;
  updateCard();
});

// Initial Load
updateCard();
