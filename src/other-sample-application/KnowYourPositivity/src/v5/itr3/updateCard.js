const bootstrap = () => {
  const data = new Map([
    ["1", { id: 1, title: "Alpine.js Basics", desc: "Learn Alpine.js quickly!" }],
    ["2", { id: 2, title: "Sasta DB Service", desc: "No DB? No Problem!" }],
    ["3", { id: 3, title: "Module-Based Approach", desc: "Better structure for scalability!" }],
    ["4", { id: 4, title: "Static JSON Fetch", desc: "Faster frontend interactions!" }],
    ["5", {id: 5, title:"KnowYourPositivity: effective 6 step process",desc:"stay calm, review, prioritise, revise , practice, retrospect"}],
    ["6", {id: 6, title:"KnowYourPositivity",desc:"Collect → Process → Store → Apply"}]
  ]);

  let currentIndex = 4;
  const keys = Array.from(data.keys());

  const updateCard = () => {
    const { title, desc } = data.get(keys[currentIndex]);
    document.getElementById("title").textContent = title;
    document.getElementById("desc").textContent = desc;
  };

  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + keys.length) % keys.length;
    updateCard();
  });

  document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % keys.length;
    updateCard();
  });

  updateCard();
};

export default bootstrap;
