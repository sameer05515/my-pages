import { Status, Todo } from "./Todo.dto.js";

export const myTodos = [
  Todo.fromData(
    `<b>Create My Todo list</b>

    - Successfully created basic structure of Todo.`,
    "25/Jan/2025",
    Status.CLOSED,
    "25/Jan/2025",
    true,
    true
  ),

  Todo.fromData(
    `<b>Identify all sources, where i have stored some data</b>.
         It could be a database, github-repo, a folder, or some sub-folder in a github repo         
    `,
    "25/Jan/2025",
    Status.OPEN,
    "",
    true,
    true
  ),

  Todo.fromData(
    `<b>Review topics in Topic-Mgmt application:</b>
        - Add appropriate tags
        `,
    "25/Jan/2025",
    Status.OPEN,
    "",
    true,
    true
  ),

  Todo.fromObject({
    name: `<b>Apply uniform layout and styles in all modules of TweetApp application:</b>
        - Add appropriate tags
        `,
    createdDate: "25/Jan/2025",
    status: Status.OPEN,
    isUrgent: false,
    isImportant: true,
  }),

  Todo.fromData(
    `<b>Add a toggle button in this page:</b>
        - Toggle button should show "Show all"/"Show only open"/"show closed" text and display filtered data accordingly in list
        `,
    "25/Jan/2025",
    Status.CLOSED,
    "25/Jan/2025",
    true,
    true
  ),
];
