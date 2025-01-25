import { displayMessages } from "./ui.js";
import { jsonData, setCurrentConversationIndex, getCurrentConversation } from "./dataLoader.js";

let currentPage = 0;
export const messagesPerPage = 5;

export function getCurrentPage() {
  return currentPage;
}

export function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    displayMessages();
  }
}

export function nextPage() {
  let conversation = getCurrentConversation();
  if (!conversation) return;

  let messages = conversation ? getConversationMessages(conversation) : [];
  if ((currentPage + 1) * messagesPerPage < messages.length) {
    currentPage++;
    displayMessages();
  }
}

export function prevConversation() {
  if (jsonData.length > 1 && getCurrentConversation()) {
    let currentIndex = jsonData.indexOf(getCurrentConversation());
    if (currentIndex > 0) {
      setCurrentConversationIndex(currentIndex - 1);
      currentPage = 0; // Reset to first page
      displayMessages();
    }
  }
}

export function nextConversation() {
  if (jsonData.length > 1 && getCurrentConversation()) {
    let currentIndex = jsonData.indexOf(getCurrentConversation());
    if (currentIndex < jsonData.length - 1) {
      setCurrentConversationIndex(currentIndex + 1);
      currentPage = 0; // Reset to first page
      displayMessages();
    }
  }
}
