import { Section, Sentence } from "./Section.js";

class Registry {
  static #sastaDB = []; // Private static storage

  static register(section, sentences = [], subsections = []) {
    if (!(section instanceof Section)) {
      throw new Error("Invalid section!! Expected an instance of Section.");
    }

    if (!Array.isArray(sentences) || sentences.some((s) => !(s instanceof Sentence))) {
      throw new Error("Sentences should be an array of Sentence objects.");
    }

    if (!Array.isArray(subsections) || subsections.some((s) => typeof s !== "object")) {
      throw new Error("Subsections should be an array of objects.");
    }

    // Store Section in DB
    Registry.#sastaDB.push(section);

    // Store Sentences with parentSectionId
    sentences.forEach((s) => {
      s.parentSectionId = section.id;
      Registry.#sastaDB.push(s);
    });

    // Store Subsections recursively
    subsections.forEach((subSec) => {
      subSec.section.parentId = section.id;
      // Registry.#sastaDB.push(subSec);

      this.register(subSec.section, subSec.sentences || [], subSec.subsections || []);
    });
  }

  static getRootSections() {
    // Returns only top-level sections
    return Registry.#sastaDB.filter((entry) => entry.type === "section" && !entry.parentId);
  }

  static getSentencesForSectionId(sectionId = "") {
    return Registry.#sastaDB.filter((entry) => entry.type === "sentence" && entry.parentSectionId === sectionId);
  }

  static getChildrenForSectionId(sectionId = "") {
    return Registry.#sastaDB.filter((entry) => entry.type === "section" && entry.parentId === sectionId);
  }
}

// === DATA CREATION === //
const getSection = (name, parentId = "") => new Section(name, parentId);
const getSentences = (texts = [], parentSectionId = "") => texts.map((s) => new Sentence(s, parentSectionId));

[
  {
    section: getSection(
      "My sentence using magical words: stay calm, review, prioritise, revise , practice, retrospect"
    ),
    sentences: getSentences([
      "Stay calm to clear mind with unnecessary things and get ready to review and prioritize actionables for today.",
      "**Stay calm** to clear your mind of unnecessary clutter and prepare yourself to **review** and **prioritize** today's actionables.",
    ]),
    subsections: [
      {
        section: getSection("222"),
        sentences: getSentences(["sentence2221", "sentence2222"]),
        subsections: [
          {
            section: getSection("333"),
            sentences: getSentences(["sentence3331", "sentence3332"]),
          },
        ],
      },
      {
        section: getSection("444"),
        sentences: getSentences(["sentence4441", "sentence4442"]),
        subsections: [
          {
            section: getSection("555"),
            sentences: getSentences(["sentence5551", "sentence5552"]),
          },
        ],
      },
    ],
  },
].forEach((rawEntry) => Registry.register(rawEntry.section, rawEntry.sentences, rawEntry.subsections));

// === EXPORTS === //
export default Registry;
export const sectionsData = Registry.getRootSections();
