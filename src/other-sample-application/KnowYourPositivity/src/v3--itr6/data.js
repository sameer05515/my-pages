import { Section, Sentence } from "./Section.js";

const getSection = (name, parentId = "") => new Section(name, parentId);
const getSentences = (texts = [], parentSectionId = "") => texts.map((s) => new Sentence(s, parentSectionId));

const prepareSectionObjectStructure = ({ section = "", sentences = [], subsections = [] }) => {
  const sectionObj = getSection(section);
  return {
    section: sectionObj,
    sentences: getSentences(sentences, sectionObj.id),
    subsections: subsections.map((sub) => prepareSectionObjectStructure(sub)), // 🔥 Recursively process subsections
  };
};

const RawData = [
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
        section: getSection(
          " created 15 more sentences by using those 6 words (stay calm, review, prioritise, revise , practice, retrospect)"
        ),
        sentences: getSentences([
          "1. **Stay calm** when overwhelmed, then **review** your progress, **prioritise** important tasks, **revise** key concepts, **practice** diligently, and finally **retrospect** to learn from the day.",
          "2. Before jumping into work, **stay calm**, **review** pending tasks, **prioritise** the most impactful ones, **revise** previous learnings, **practice** consistently, and **retrospect** before wrapping up. ",
          "3. To build expertise, **stay calm** and focused, **review** past mistakes, **prioritise** areas of improvement, **revise** foundational knowledge, **practice** regularly, and **retrospect** on your growth. ",
          "4. When struggling with a challenge, **stay calm**, **review** different approaches, **prioritise** the most effective one, **revise** your understanding, **practice** until confident, and **retrospect** for better strategies.",
          "5. Every day, **stay calm**, **review** your goals, **prioritise** wisely, **revise** critical concepts, **practice** without distractions, and **retrospect** to track progress and refine your approach. ",
          "6. **Stay calm** in the face of challenges, **review** your approach, **prioritise** key tasks, **revise** weak areas, **practice** with intent, and **retrospect** to refine your strategy.",
          "7. Before making decisions, **stay calm**, **review** all available options, **prioritise** the best course of action, **revise** if needed, **practice** execution, and **retrospect** for continuous improvement.",
          "8. A productive day starts when you **stay calm**, **review** past learnings, **prioritise** your focus areas, **revise** critical concepts, **practice** consistently, and **retrospect** before ending the day.",
          "9. When progress feels slow, **stay calm**, **review** your roadmap, **prioritise** impactful steps, **revise** your strategies, **practice** without hesitation, and **retrospect** for better clarity.",
          "10. Success comes when you **stay calm** in uncertainty, **review** what truly matters, **prioritise** efforts wisely, **revise** mistakes, **practice** with discipline, and **retrospect** to keep growing.",
          "11. **Stay calm** when things feel overwhelming, **review** your journey so far, **prioritise** what truly matters, **revise** your approach, **practice** with dedication, and **retrospect** to see how far you've come.",
          "12. In moments of doubt, **stay calm**, **review** your strengths, **prioritise** small wins, **revise** your mindset, **practice** resilience, and **retrospect** to embrace your growth.",
          "13. **Stay calm** and trust the process, **review** your progress, **prioritise** what fuels your passion, **revise** with clarity, **practice** with purpose, and **retrospect** to celebrate even the smallest victories.",
          "14. No matter how chaotic life gets, **stay calm**, **review** your goals, **prioritise** consistency over perfection, **revise** as needed, **practice** daily, and **retrospect** to recognize your achievements.",
          "15. **Stay calm** even when things don’t go as planned, **review** what went wrong, **prioritise** learning from it, **revise** your methods, **practice** with renewed energy, and **retrospect** to refine your vision.",
        ]),
        subsections: [
          //   {
          //     section: getSection("333"),
          //     sentences: getSentences(["sentence3331", "sentence3332"]),
          //   },
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
];

// === EXPORTS === //
export default RawData;
