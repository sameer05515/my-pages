class Builder {
  constructor(sections = [], idCounter = 0) {
    this.sections = sections;
    this.idCounter = idCounter;
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

  static fromData({ sections = [], idCounter = 0 }) {
    return new Builder(
      sections.map((section) => ({
        id: section.id || "",
        name: section.name || "Untitled",
        sentences: section.sentences || [],
      })),
      idCounter
    );
  }
}

export default Builder;
