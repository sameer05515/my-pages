import { ClassSuffixForStatus } from "./Todo.dto.js";

// Function to generate a single list item
const createListItem = ({ name, createdDate, status, closedOn, isUrgent, isImportant }) => {
  const createdDateStr = createdDate
    ? `<span class="badge text-bg-secondary"> Created On: ${createdDate}  </span> `
    : `<span class="badge text-bg-danger"> Created On: Missing </span>`;

  const closedOnStr = closedOn ? `<span class="badge text-bg-secondary">Closed On: ${closedOn} </span>` : "";
  const statusClassName = ClassSuffixForStatus[status];
  const statusStr = `<span class="badge text-bg-${statusClassName}"> ${status} </span>`;

  const urgentStr = `<span class="badge text-bg-${isUrgent ? "danger" : "warning"}"> ${!isUrgent ? "Not" : ""} Urgent </span>`;

  const importantStr = `<span class="badge text-bg-${isImportant ? "dark" : "secondary"}"> ${!isImportant ? "Not" : ""} Important </span>`;

  const aa = `
      <div class="shadow rounded p-3 mb-5 mt-2 list-group-item list-group-item-${statusClassName}">
        <span style="white-space: pre-wrap;">${name} </span> <br/>
        <span class="fw-bold">${statusStr} ${urgentStr} ${importantStr} ${createdDateStr} ${closedOnStr}</span>
      </div>`;

  return aa;
};

const getLinks = (pages = []) => pages.map(createListItem).join("");

// Function to generate a nested list
export const createList = (children) => `
        <ul class="list-group col-8">
          ${getLinks(children)}
        </ul>
      `;
