// import { createStore } from "redux";
import Navigator from "./Navigator.js";
import { bootstrap } from "./Registry.js";
import SastaDBService from "./SastaDBService.js";

// store.js
const { createStore } = Redux; // Redux ka global object

// Initial State
const firstSentence = SastaDBService.getAllSentences()[0];
const initialState = {
  selectedId: firstSentence ? firstSentence.id : null,
};

// Action Types
const NEXT = "NEXT";
const PREV = "PREV";

// Reducer Function
function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT:
      return { ...state, selectedId: Navigator.getNextSentenceId(state.selectedId) };
    case PREV:
      return { ...state, selectedId: Navigator.getPrevSentenceId(state.selectedId) };
    default:
      return state;
  }
}

// Redux Store
const store = createStore(paginationReducer);
bootstrap();

export { store, NEXT, PREV };
