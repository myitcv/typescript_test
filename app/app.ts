/// <reference path="tsd.d.ts" />

import * as Immutable from "immutable";
import * as D3 from "d3";
import * as Banana from "./banana";

let m: Immutable.Map<string, number> = Immutable.Map({test: 5});
console.log(m);


let i: D3.Lab = new D3.lab(3, 4, 5);
console.log(i);

if(Banana.hasOwnProperty("TestMe")) {
	console.log("Yes it has", (<{TestMe(): string;}>Banana).TestMe());
}

if(Banana.hasOwnProperty("TestMeAgain")) {
	console.log("Yes it has", (<{TestMeAgain(): string}>Banana).TestMeAgain());
}

