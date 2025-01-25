import Builder from "./Builder.dto.js";

// Create Builder instance
const builderInstance = new Builder();

builderInstance.addSection("Growth Mindset", [
  "Discomfort is a signal for growth; embrace the force push forward.",
  "Success is a result of consistent mastery push in any field.",
]);

builderInstance.addSection("Learning Process", [
  "Improvement becomes enjoyable when seen as a fun push.",
  "Overcoming a plateau requires an intentional push towards new challenges.",
]);


export default builderInstance;