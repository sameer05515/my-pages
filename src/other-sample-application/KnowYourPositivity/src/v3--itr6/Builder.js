// Builder.js

import { Section } from "./Section.js";

class Builder {
  constructor() {
    this.sections = [];
  }

  addSection(name, type = "default") {
    const section = new Section(name, type);
    this.sections.push(section);
    return section;
  }

  build() {
    return this.sections;
  }
}

export default Builder;
