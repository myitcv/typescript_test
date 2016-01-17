/// <reference path="../jspm_packages/npm/immutable@3.7.6/dist/immutable.d.ts" />
/// <reference path="../typings/d3/d3.d.ts" />
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/es6-shim/es6-shim.d.ts" />
/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/whatwg-fetch/whatwg-fetch.d.ts" />
interface Class<T> {
	new (): T;
}

interface ReactComponentClass<P> {
	new (props?: P, context?: {}): __React.Component<P, {}>;
}
