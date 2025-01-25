import { displayMessages } from "./ui.js";

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
  currentPage++;
  displayMessages();
}
