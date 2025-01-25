// Section.js

import { generateSlug } from "./utils.js";

class Section {
  constructor(name, parentId = "") {
    this.id = generateSlug(name);
    this.name = name;
    this.type = "section";
    this.parentId = parentId || "";
  }

}

class Sentence {
  constructor(text, parentSectionId="") {
    this.id = generateSlug(text);
    this.text = text;
    this.type = "sentence";
    this.parentSectionId = parentSectionId;
  }
}

export { Section, Sentence };
