const BuilderRenderer = {
    render(builderInstance, containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
  
      container.innerHTML = ""; // Clear existing content
  
      builderInstance.sections.forEach((section) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("bg-gray-50", "p-4", "rounded-lg", "shadow", "mb-4");
  
        sectionDiv.innerHTML = `
            <h2 class="text-xl font-semibold mb-2">${section.name}</h2>
            <ul class="list-disc list-inside text-gray-700">
                ${section.sentences.map((sentence) => `<li>${sentence}</li>`).join("")}
            </ul>
        `;
  
        container.appendChild(sectionDiv);
      });
    },
  };
  
  export default BuilderRenderer;
  