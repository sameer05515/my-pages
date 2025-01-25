import Registry from "./Registry.js";

const BuilderRenderer = {
  render(sections, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ""; // Clear existing content

    sections.forEach((section) => {
      const sectionDiv = BuilderRenderer.renderSection(section);
      container.appendChild(sectionDiv);
    });
  },

  renderSection(section) {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("bg-gray-50", "p-4", "rounded-lg", "shadow", "mb-4");

    // 🛠️ Fetch Sentences for the current Section
    let sentenceList = Registry.getSentencesForSectionId(section.id)
      .map((sentence) => `<div class="text-gray-700 my-3">${marked.parse(sentence.text)}</div>`)
      .join("");

    // 🛠️ Fetch Subsections recursively
    let subSectionsHTML = "";
    Registry.getChildrenForSectionId(section.id).forEach((sub) => {
      const subSectionDiv = BuilderRenderer.renderSection(sub); // Recursive Call
      subSectionsHTML += `<div class="ml-4 border-l-4 pl-2">${subSectionDiv.outerHTML}</div>`;
    });

    sectionDiv.innerHTML = `
        <h2 class="text-xl font-semibold">${marked.parse(section.name)}</h2>
        <div class="list-disc list-inside">${sentenceList}</div>
        <div class="mt-2">${subSectionsHTML}</div>
    `;

    return sectionDiv;
  },
};

export default BuilderRenderer;
