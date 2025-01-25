// Section.js

import { generateSlug } from "./utils.js";

class Section {
  constructor(name, type = "default") {
    this.id = generateSlug(name);
    this.name = name;
    this.type = type;
    this.sentences = [];
    this.subSections = [];
  }

  addSentence(sentenceText, type = "general") {
    const sentence = new Sentence(sentenceText, type, this.id);
    this.sentences.push(sentence);
  }

  addSubSection(name, type = "default") {
    const subSection = new Section(name, type);
    this.subSections.push(subSection);
    return subSection;
  }
}

class Sentence {
  constructor(text, type = "general", parentSectionId) {
    this.id = generateSlug(text);
    this.text = text;
    this.type = type;
    this.parentSectionId = parentSectionId;
  }
}

export { Section, Sentence };
