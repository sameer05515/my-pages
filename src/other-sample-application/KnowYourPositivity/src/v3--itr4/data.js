import Builder from "./Builder.js";

const builder = new Builder();

// const mindsetSection = builder.addSection("Growth Mindset");
// mindsetSection.addSentence("Embrace challenges as opportunities.");
// mindsetSection.addSentence("Effort leads to mastery.");

// const disciplineSection = builder.addSection("Daily Discipline");
// disciplineSection.addSentence("Consistency beats intensity.");
// disciplineSection.addSentence("Start small but stay consistent.");

const section1 = builder.addSection(
  "My sentence using magical words: stay calm, review, prioritise, revise , practice, retrospect"
);
[
  "Stay calm to clear mind with unnecessary things and get ready to review and prioritize actionables for today. So that I could revise and practice some meaningful today. Don't forget to mention retrospection point by EOD.",
  "**Stay calm** to clear your mind of unnecessary clutter and prepare yourself to **review** and **prioritize** today's actionables. This will help you **revise** and **practice** something meaningful. And don’t forget to note down a **retrospection** point by the end of the day!",
].map((sentence) => section1.addSentence(sentence));

const sections=[

]



const sectionsData = builder.build();

export default sectionsData;
