import RawData from "./data.js";
// import { Section, Sentence } from "./Section.js";
import SastaDBService from "./SastaDBService.js";

class Registry {
  static register(section, sentences = [], subsections = []) {
    if (!section) throw new Error("Invalid section!! Expected an instance of Section.");

    // 🛠️ Register Section
    SastaDBService.storeSection(section);

    // 🛠️ Register Sentences
    sentences.forEach((s) => SastaDBService.storeSentence(s, section.id));

    // 🛠️ Register Subsections recursively
    subsections.forEach((subSec) => {
      subSec.section.parentId = section.id;
      this.register(subSec.section, subSec.sentences || [], subSec.subsections || []);
    });
  }
}

// 🏗️ Load initial data
export const bootstrap=()=>{
  RawData.forEach((rawEntry) => Registry.register(rawEntry.section, rawEntry.sentences, rawEntry.subsections));
}

export default Registry;
