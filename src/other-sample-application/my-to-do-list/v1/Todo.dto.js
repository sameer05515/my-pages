export const Status = {
  OPEN: "Open",
  CLOSED: "Closed",
  UNKNOWN: "Unknown",
};

export const StatusOrder = {
  [Status.OPEN]: 0,
  [Status.CLOSED]: 1,
  [Status.UNKNOWN]: 2,
};

export const ClassSuffixForStatus = {
  [Status.OPEN]: "info",
  [Status.CLOSED]: "success",
  [Status.UNKNOWN]: "warning",
};

export class Todo {
  constructor(name, createdDate, status, closedOn, isUrgent = false, isImportant = false) {
    this.name = name || "Name Missing!!";
    this.createdDate = createdDate || "";
    this.closedOn = closedOn || "";
    this.status = status || Status.UNKNOWN;
    this.isUrgent = isUrgent;
    this.isImportant = isImportant;
  }

  // Static method to create a Page instance from raw data
  static fromData(name, createdDate, status, closedOn, isUrgent, isImportant) {
    return new Todo(name, createdDate, status, closedOn, isUrgent, isImportant);
  }

  // Static method to create a Page instance from object
  static fromObject(
    { name, createdDate, status, closedOn, isUrgent, isImportant } = {
      name: "",
      createdDate: "",
      status: "",
      closedOn: "",
      isUrgent: false,
      isImportant: false,
    }
  ) {
    return new Todo(name, createdDate, status, closedOn, isUrgent, isImportant);
  }
}

const defaultFilterFn = (todo) => todo.status !== Status.CLOSED;

export const getFilteredTodos = (todos = [], filterFn = defaultFilterFn) => todos.filter((todo) => filterFn?.(todo));

/**
 * Sorts an array of Todo objects by a given key.
 * @param {Todo[]} todos - Array of Todo objects.
 * @param {string} key - The key to sort by (e.g., "name", "createdDate").
 * @param {boolean} [ascending=true] - Whether to sort in ascending order.
 * @returns {Todo[]} - Sorted array of Todo objects.
 */
export function sortTodosByKey(todos, key, ascending = true) {
  return todos.slice().sort((a, b) => {
    if (a[key] < b[key]) return ascending ? -1 : 1;
    if (a[key] > b[key]) return ascending ? 1 : -1;
    return 0;
  });
}

/**
 * Sorts an array of Todo objects by createdDate.
 * @param {Todo[]} todos - Array of Todo objects.
 * @param {boolean} [ascending=true] - Whether to sort in ascending order.
 * @returns {Todo[]} - Sorted array of Todo objects.
 */
export function sortTodosByCreatedDate(todos, ascending = true) {
  return todos.slice().sort((a, b) => {
    const dateA = new Date(a.createdDate);
    const dateB = new Date(b.createdDate);
    return ascending ? dateA - dateB : dateB - dateA;
  });
}

/**
 * Sorts an array of Todo objects by closedOn date.
 * @param {Todo[]} todos - Array of Todo objects.
 * @param {boolean} [ascending=true] - Whether to sort in ascending order.
 * @returns {Todo[]} - Sorted array of Todo objects.
 */
export function sortTodosByClosedOnDate(todos, ascending = true) {
  return todos.slice().sort((a, b) => {
    const dateA = a.closedOn ? new Date(a.closedOn) : new Date(0);
    const dateB = b.closedOn ? new Date(b.closedOn) : new Date(0);
    return ascending ? dateA - dateB : dateB - dateA;
  });
}

/**
 * Sorts an array of Todo objects by urgency and importance.
 * Urgent Todos appear first, followed by important Todos.
 * @param {Todo[]} todos - Array of Todo objects.
 * @returns {Todo[]} - Sorted array of Todo objects.
 */
export function sortTodosByUrgencyAndImportance(todos) {
  return todos.slice().sort((a, b) => {
    if (a.isUrgent !== b.isUrgent) return b.isUrgent - a.isUrgent;
    if (a.isImportant !== b.isImportant) return b.isImportant - a.isImportant;
    return 0;
  });
}

/**
 * Sorts an array of Todo objects by status.
 * Order: OPEN -> IN_PROGRESS -> CLOSED -> UNKNOWN.
 * @param {Todo[]} todos - Array of Todo objects.
 * @param {Object} StatusOrder - Mapping of status to priority (lower is higher priority).
 * @returns {Todo[]} - Sorted array of Todo objects.
 */
export function sortTodosByStatus(todos, statusOrder = StatusOrder) {
  return todos.slice().sort((a, b) => {
    const statusA = statusOrder[a.status] ?? Number.MAX_VALUE;
    const statusB = statusOrder[b.status] ?? Number.MAX_VALUE;
    return statusA - statusB;
  });
}
