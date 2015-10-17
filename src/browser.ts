import * as React from "react";
import {BuildMyComponent} from "./example";

export function Run(): void {
	console.log("Running browser");
	React.render(BuildMyComponent(), document.body);
}
