import { displayMessages } from "./ui.js";

export let jsonData = [];

export async function loadJSON() {
  try {
    const response = await fetch("../data/prem-conversations-08-Feb-2025.json");
    jsonData = await response.json();
    displayMessages();
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
}
