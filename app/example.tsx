/// <reference path="tsd.d.ts" />

import * as React from "react";

interface IProps {
	foo: string;
}

export class MyComponent extends React.Component<IProps, {}> {
	render(): JSX.Element {
		return <span>This is a { this.props.foo }</span>;
	}
}

export function BuildMyComponent(): JSX.Element {
	let x: string = "test";
	return <MyComponent foo = { x } />;
}
