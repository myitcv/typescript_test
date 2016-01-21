// import "closure-library";
import * as ReactDOM from "react-dom";
import {BuildMyComponent} from "./example";

export function Run(e: Element): void {
	console.log("Running browser");
	ReactDOM.render(BuildMyComponent(), e);
}
