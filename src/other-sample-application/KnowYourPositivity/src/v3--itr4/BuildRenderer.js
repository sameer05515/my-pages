const BuilderRenderer = {
  render(sections, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ""; // Clear existing content

    sections.forEach((section) => {
      const sectionDiv = document.createElement("div");
      sectionDiv.classList.add("bg-gray-50", "p-4", "rounded-lg", "shadow", "mb-4");

      let sentenceList = section.sentences
        .map((sentence) => `<div class="text-gray-700 my-3">${marked.parse(sentence.text)}</div>`) // Convert Markdown to HTML
        .join("");

      let subSectionsHTML = section.subSections
        .map((sub) => `<div class="ml-4 border-l-4 pl-2">${marked.parse(sub.name)}</div>`)
        .join("");

      sectionDiv.innerHTML = `
          <h2 class="text-xl font-semibold">${marked.parse(section.name)}</h2>
          <div class="list-disc list-inside">${sentenceList}</div>
          <div class="mt-2">${subSectionsHTML}</div>
      `;

      container.appendChild(sectionDiv);
    });
  },
};

export default BuilderRenderer;
