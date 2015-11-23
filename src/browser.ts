import * as React from "react";
import * as ReactDOM from "react-dom";
import {BuildMyComponent} from "./example";

export function Run(): void {
	console.log("Running browser");
	ReactDOM.render(BuildMyComponent(), document.getElementById("main-content"));
}
