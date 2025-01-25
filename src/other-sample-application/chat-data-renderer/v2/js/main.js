import { loadJSON } from "./dataLoader.js";
import { displayMessages } from "./ui.js";
import { prevPage, nextPage } from "./pagination.js";

document.getElementById("prevBtn").addEventListener("click", prevPage);
document.getElementById("nextBtn").addEventListener("click", nextPage);

loadJSON().then(displayMessages);
