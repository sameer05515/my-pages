const fs = require("fs");
const path = require("path");

const settingsPath = path.join(__dirname, ".vscode/settings.json");
//otherSampleApplicationRootFolder
const otherSampleApplicationRootFolder = path.join(__dirname, "other-sample-application");

let settings = fs.existsSync(settingsPath) ? JSON.parse(fs.readFileSync(settingsPath, "utf8")) : {};

const rootFolders = fs
  .readdirSync(otherSampleApplicationRootFolder)
  .filter((name) => fs.statSync(path.join(otherSampleApplicationRootFolder, name)).isDirectory());

// const versionFolders = rootFolders.filter((name) => /^v\d+$/i.test(name));
// const iterationFolders = rootFolders.filter((name) => /^itr\d+$/i.test(name));

settings["vsicons.associations.folders"] = [
  // ...rootFolders.map((v) => ({ icon: "aurelia", extensions: [v], format: "svg" })),
  { icon: "aurelia", extensions: rootFolders.map((v) => v), format: "svg" },
  //   ...iterationFolders.map((itr) => ({ icon: "folder-src", extensions: [itr], format: "svg" }))
];

fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));

console.log("✅ Folder icons updated!");
