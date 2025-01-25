import { displayMessages } from "./ui.js";

export let jsonData = [];
export let currentConversationIndex = 0;

export async function loadJSON() {
  try {
    // const response = await fetch("../data/vandana-chatgpt-08-feb-2025-conversations.json");
    const response = await fetch("../data/prem-conversations-08-Feb-2025.json");
    jsonData = await response.json();
    displayMessages();
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
}

export function getCurrentConversation() {
  return jsonData[currentConversationIndex] || null;
}

export function setCurrentConversationIndex(index) {
  currentConversationIndex = index;
}
