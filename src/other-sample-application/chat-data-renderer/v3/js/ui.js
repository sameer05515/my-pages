import { jsonData, getCurrentConversation } from "./dataLoader.js";
import { getConversationMessages } from "./utils.js";
import { getCurrentPage, messagesPerPage } from "./pagination.js";
import { currentConversationIndex } from "./dataLoader.js";

export function displayMessages() {
  let root = document.getElementById("root");
  root.innerHTML = "";

  if (jsonData.length === 0) return;

  let conversation = getCurrentConversation();
  if (!conversation) return;

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

  document.getElementById("prevPageBtn").disabled = getCurrentPage() === 0;
  document.getElementById("nextPageBtn").disabled = end >= messages.length;

  document.getElementById("prevConversationBtn").disabled = currentConversationIndex === 0;
  document.getElementById("nextConversationBtn").disabled = currentConversationIndex >= jsonData.length - 1;

  document.getElementById("conversationIndex").textContent = `Conversation ${currentConversationIndex + 1} of ${jsonData.length}`;
}
