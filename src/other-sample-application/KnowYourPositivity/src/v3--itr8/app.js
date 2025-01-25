// app.js

import Registry from "./Registry.js";
import BuilderRenderer from "./BuildRenderer.js";

BuilderRenderer.render(Registry.getRootSections(), "content");
