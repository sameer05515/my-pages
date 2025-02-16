import Page from "./Page.dto.js";

const Pages = [
  Page.fromData({
    name: "🏃‍♂️‍➡️Know Your Positivity : <i>To push beyond limits, using some magic words!! 🪄🪄🚀🚀 </i>",
    children: [
      Page.fromData({ name: "<h3>Unlock the Power Within!: Through some magical words!!🪄🪄🪄🪄🪄</h3>" }),
      Page.fromData({
        name: "🔥Bootstrap: Initial versions: Pagination and Prev-Next Navigation Implementation: Part1",
        children: [
          Page.fromData({ name: "v1", link: "v1/index.html" }),
          Page.fromData({ name: "v2", link: "v2/index.html" }),
        ],
      }),

      Page.fromData({
        name: "v3: 🎯Worked to create Registry and builder module to generate structure",
        children: [
          Page.fromData({ name: "v3--itr1", link: "v3--itr1/index.html" }),
          Page.fromData({ name: "v3--itr2", link: "v3--itr2/index.html" }),
          Page.fromData({ name: "v3--itr3", link: "v3--itr3/index.html" }),
          Page.fromData({ name: "v3--itr4", link: "v3--itr4/index.html" }),
          Page.fromData({ name: "v3--itr5", link: "v3--itr5/index.html" }),
          Page.fromData({ name: "v3--itr6", link: "v3--itr6/index.html" }),
          Page.fromData({ name: "v3--itr7", link: "v3--itr7/index.html" }),
          Page.fromData({ name: "✅ Stable version: v3--itr8", link: "v3--itr8/index.html" }),
        ],
      }),

      Page.fromData({
        name: "v4: 🎯Pagination and Prev-Next Navigation Implementation: Part2",
        children: [
          Page.fromData({ name: "v4--itr1", link: "v4/itr1/index.html" }),
          Page.fromData({ name: "v4--itr2", link: "v4/itr2/index.html" }),
          Page.fromData({ name: "v4--itr3", link: "v4/itr3/index.html" }),
          Page.fromData({ name: "✅ Stable version: v4--itr4", link: "v4/itr4/index.html" }),
        ],
      }),

      Page.fromData({
        name: "v5: 🔥✅ Java + SastaDBService → Efficient Static Interactions! 🎯- Part 1",
        children: [
          Page.fromData({
            name: "🔥 Step 5.1.1: 🎯Extract logic to navigate and toggle",
            children: [
              Page.fromData({ name: "v5--itr1", link: "v5/itr1/index.html" }),
              Page.fromData({ name: "v5--itr2", link: "v5/itr2/index.html" }),
              Page.fromData({ name: "✅ Stable version: v5--itr3", link: "v5/itr3/index.html" }),
            ],
          }),
          Page.fromData({
            name: `
1️⃣ The intention from this exercise <br/>
2️⃣ was to check <br/>
3️⃣ how easy or tough it is <br/>
4️⃣ to implement the toggle functionality <br/>
5️⃣ without any external library. <br/>
            `,
            children: [
              Page.fromData({
                name: "🔥 POC: 🤔✅  pure CSS + JavaScript se bina Tailwind ke tailwind dark/light mode achieve ho sakta hai?",
                children: [
                  Page.fromData({
                    name: "✅Ha kar sakte hain. This is an example",
                    link: "v5/itr4/index.html",
                    children: [],
                  }),
                ],
              }),
              Page.fromData({
                name: "🔥 POC: 🤔✅ Bootstrap use karke dark/light mode achieve ho sakta hai?",
                children: [
                  Page.fromData({ name: "🤨🧘‍♂️ Possible hoga! baad me dekhte hain?" /**, link: "v5/itr1/index.html"*/ }),
                ],
              }),
            ],
          }),

          Page.fromData({
            name: "🔥 Step 5.2: 🎯Get data from backend java application, or at least a json file with fetch response",
            children: [Page.fromData({ name: "TBD" /**, link: "v5/itr1/index.html"*/ })],
          }),
        ],
      }),

      Page.fromData({
        name: "🎯 v6: 🎯🔥🪄🪄🪄🚀🚀 Aaj apna KnowYourPositivity.v1.0.1 live hoke rahega! 💪",
        children: [
          Page.fromData({ name: "v6--itr1: Look before <b>ChatGPT Magic 🪄🪄🪄🚀🚀</b>", link: "v6/itr1/index.html" }),
          Page.fromData({
            name: "🪄🪄🪄🚀🚀 My first website with <b>ChatGPT Magic 🪄🪄🪄🚀🚀</b>",
            link: "v4/itr2-live-on--gh-pages-as-v1/index.html",
          }),
          Page.fromData({
            name: `
<b>Retrospection points: After making live</b> <br/>
1️⃣ -  <br/>
2️⃣ -  <br/>
            
            `,
          }),
        ],
      }),

      Page.fromData({
        name: "🎯 v5:- Part 2: 🔥 Java + SastaDBService → Efficient Static Interactions! ",
        children: [Page.fromData({ name: "TBD" })],
      }),
    ],
  }),
];

export default Pages;
