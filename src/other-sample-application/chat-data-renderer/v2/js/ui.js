import { jsonData } from "./dataLoader.js";
import { getConversationMessages } from "./utils.js";
import { getCurrentPage, messagesPerPage } from "./pagination.js";

export function displayMessages() {
  let root = document.getElementById("root");
  root.innerHTML = "";

  if (jsonData.length === 0) return;

  let conversation = jsonData[0]; // Assuming first conversation
  let messages = getConversationMessages(conversation);
  let start = getCurrentPage() * messagesPerPage;
  let end = start + messagesPerPage;
  let paginatedMessages = messages.slice(start, end);

  paginatedMessages.forEach((msg) => {
    let messageDiv = document.createElement("div");
    messageDiv.className = "p-3 border rounded-md bg-gray-200";
    messageDiv.innerHTML = `<span class="font-bold">${msg.author}:</span> ${msg.text}`;
    root.appendChild(messageDiv);
  });

  document.getElementById("prevBtn").disabled = getCurrentPage() === 0;
  document.getElementById("nextBtn").disabled = end >= messages.length;
}
