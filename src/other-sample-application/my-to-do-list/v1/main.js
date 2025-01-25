import { Status, getFilteredTodos, sortTodosByUrgencyAndImportance, sortTodosByCreatedDate, sortTodosByStatus } from "./Todo.dto.js";
import { myTodos } from "./data.js";
import { createList } from "./list-generation.js";
import pipe from "../common/pipe.js";

//=========================== Main function to generate links =============================================================

const FilterActionTypes = {
  SHOW_ALL: "show-all",
  SHOW_OPEN_ONLY: "show-open-only",
  SHOW_CLOSED_ONLY: "show-closed-only",
};

const FilterActions = {
  [FilterActionTypes.SHOW_ALL]: (todo) => true,
  [FilterActionTypes.SHOW_OPEN_ONLY]: (todo) => todo.status === Status.OPEN,
  [FilterActionTypes.SHOW_CLOSED_ONLY]: (todo) => todo.status === Status.CLOSED,
};

// Dynamically render the button group
document.getElementById("my-button-groups-div").innerHTML = `
  <div class="btn-group bg-info" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" class="btn-check" name="btnradio" id="show-open-todos-btn" autocomplete="off" checked>
    <label class="btn btn-outline-primary" for="show-open-todos-btn">Show Open</label>

    <input type="radio" class="btn-check" name="btnradio" id="show-closed-todos-btn" autocomplete="off">
    <label class="btn btn-outline-primary" for="show-closed-todos-btn">Show Closed</label>    

    <input type="radio" class="btn-check" name="btnradio" id="show-all-todos-btn" autocomplete="off">
    <label class="btn btn-outline-primary" for="show-all-todos-btn">Show All</label>    
  </div>
`;

// Function to handle button group clicks
const handleGroupBtnClick = (actionType = FilterActionTypes.SHOW_ALL) => {
  const ulElement = document.getElementById("to-do-list-div");
  // ulElement.innerHTML = createList(sortTodosByUrgencyAndImportance(getFilteredTodos(myTodos, FilterActions[actionType])));

  ulElement.innerHTML = createList(
    pipe(
      (todos) => getFilteredTodos(todos, FilterActions[actionType]),
      sortTodosByUrgencyAndImportance,
      sortTodosByCreatedDate,
      sortTodosByStatus
    )(myTodos)
  );
};

// Attach click event handlers to buttons using JavaScript
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("show-all-todos-btn").addEventListener("click", () => {
    handleGroupBtnClick(FilterActionTypes.SHOW_ALL);
  });

  document.getElementById("show-closed-todos-btn").addEventListener("click", () => {
    handleGroupBtnClick(FilterActionTypes.SHOW_CLOSED_ONLY);
  });

  document.getElementById("show-open-todos-btn").addEventListener("click", () => {
    handleGroupBtnClick(FilterActionTypes.SHOW_OPEN_ONLY);
  });

  handleGroupBtnClick(FilterActionTypes.SHOW_OPEN_ONLY);
});
