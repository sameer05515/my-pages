import { loadJSON } from "./dataLoader.js";
import { displayMessages } from "./ui.js";
import { prevPage, nextPage } from "./pagination.js";
import { prevConversation, nextConversation } from "./pagination.js";

document.getElementById("prevPageBtn").addEventListener("click", prevPage);
document.getElementById("nextPageBtn").addEventListener("click", nextPage);

document.getElementById("prevConversationBtn").addEventListener("click", prevConversation);
document.getElementById("nextConversationBtn").addEventListener("click", nextConversation);

loadJSON().then(displayMessages);
