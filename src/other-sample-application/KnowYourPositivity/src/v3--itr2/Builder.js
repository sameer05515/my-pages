class Builder {
  constructor() {
    this.sections = [];
    this.idCounter = 0;
  }

  generateUniqueId() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
    const year = date.getFullYear();
    this.idCounter += 1;
    return `${day}${month}${year}.${this.idCounter}`;
  }

  addSection(name, sentences) {
    const sectionId = this.generateUniqueId();
    this.sections.push({ id: sectionId, name, sentences });
  }

  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ""; // Clear existing content

    this.sections.forEach((section) => {
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
  }
}

export default Builder;
