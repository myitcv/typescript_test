/// <reference path="tsd.d.ts" />

import * as Immutable from "immutable";
import * as D3 from "d3";

let m: Immutable.Map<string, number> = Immutable.Map({test: 5});
console.log(m);


let i: D3.Lab = new D3.lab(3, 4, 5);
console.log(i);

