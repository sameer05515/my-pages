// store.js
const { createStore } = Redux; // Redux ka global object

// Initial State
const initialState = {
  data: [
    { section: "Growth Mindset", sentence: "Discomfort is a signal for a force push towards growth." },
    { section: "Learning Journey", sentence: "Improvement happens when learning feels like a fun push, not a burden." },
    { section: "Breaking Plateaus", sentence: "A plateau is just a sign that you need an intentional push to level up." },
    { section: "Mastery Path", sentence: "Success is built through consistent mastery push, not luck." },
  ],
  currentIndex: 0,
};

// Action Types
const NEXT = "NEXT";
const PREV = "PREV";

// Reducer Function
function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT:
      return {
        ...state,
        currentIndex: Math.min(state.currentIndex + 1, state.data.length - 1),
      };
    case PREV:
      return {
        ...state,
        currentIndex: Math.max(state.currentIndex - 1, 0),
      };
    default:
      return state;
  }
}

// Redux Store
const store = createStore(paginationReducer);

export { store, NEXT, PREV };
