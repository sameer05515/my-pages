import { displayMessages } from "./ui.js";

export let jsonData = [];

export async function loadJSON() {
  try {
    const response = await fetch("../data/vandana-chatgpt-08-feb-2025-conversations.json");
    jsonData = await response.json();
    displayMessages();
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
}
