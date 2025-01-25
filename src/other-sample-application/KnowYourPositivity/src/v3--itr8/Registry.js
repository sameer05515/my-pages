import RawData from "./data.js";
import { Section, Sentence } from "./Section.js";

class Registry {
  static #sastaDB = new Map(); // Map for fast lookups

  static #generateKey(id, type) {
    return `${id}:${type}`;
  }

  static register(section, sentences = [], subsections = []) {
    if (!section) {
      throw new Error("Invalid section!! Expected an instance of Section.");
    }

    if (!Array.isArray(sentences)) {
      throw new Error("Sentences should be an array of Sentence objects.");
    }

    if (!Array.isArray(subsections) || subsections.some((s) => typeof s !== "object")) {
      throw new Error("Subsections should be an array of objects.");
    }

    // 🛠️ Store Section with "type"
    const sectionData = { ...section, type: "section" };
    Registry.#sastaDB.set(Registry.#generateKey(section.id, "section"), sectionData);

    // 🛠️ Store Sentences with "type"
    sentences.forEach((s) => {
      s.parentSectionId = section.id;
      const sentenceData = { ...s, type: "sentence" };
      Registry.#sastaDB.set(Registry.#generateKey(s.id, "sentence"), sentenceData);
    });

    // 🛠️ Store Subsections recursively
    subsections.forEach((subSec) => {
      subSec.section.parentId = section.id;
      this.register(subSec.section, subSec.sentences || [], subSec.subsections || []);
    });
  }

  static getSectionById(sectionId) {
    return Registry.#sastaDB.get(Registry.#generateKey(sectionId, "section"));
  }

  static getSentencesForSectionId(sectionId) {
    return Array.from(Registry.#sastaDB.values()).filter(
      (entry) => entry.type === "sentence" && entry.parentSectionId === sectionId
    );
  }

  static getChildrenForSectionId(sectionId) {
    return Array.from(Registry.#sastaDB.values()).filter(
      (entry) => entry.type === "section" && entry.parentId === sectionId
    );
  }

  static getRootSections() {
    return Array.from(Registry.#sastaDB.values()).filter(
      (entry) => entry.type === "section" && !entry.parentId
    );
  }

  static printMap(){
    // return Registry.#sastaDB.entries();
    console.log(Registry.#sastaDB)
  }
}

RawData.forEach((rawEntry) => Registry.register(rawEntry.section, rawEntry.sentences, rawEntry.subsections));

// // === EXPORTS === //
export default Registry;
