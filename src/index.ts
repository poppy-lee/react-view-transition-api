import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

import { createElement } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

const root = createRoot(document.getElementById("root")!);
root.render(createElement(App));
