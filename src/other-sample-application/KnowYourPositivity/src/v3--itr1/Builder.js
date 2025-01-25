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
      sectionDiv.classList.add("section");
      sectionDiv.innerHTML = `
          <h2>${section.name}</h2>
          <ul>
            ${section.sentences.map((sentence) => `<li>${sentence}</li>`).join("")}
          </ul>
        `;
      container.appendChild(sectionDiv);
    });
  }
}

// Example Usage:
const builder = new Builder();
builder.addSection("Growth Mindset", [
  "Discomfort is a signal for growth; embrace the force push forward.",
  "Success is a result of consistent mastery push in any field.",
]);

builder.addSection("Learning Process", [
  "Improvement becomes enjoyable when seen as a fun push.",
  "Overcoming a plateau requires an intentional push towards new challenges.",
]);

// Call `builder.render("content")` where `content` is the ID of a container div in HTML.
