import * as React from "react";
import {curry} from "./lang";
import {Uint64} from "./custom_types";
import {HelloRequest} from "./immut_helloworld";
import {Backend} from "./api_endpoint";

interface ComponentAProps<T> {
	foo: T;
}

interface ComponentAState {
	responses?: string;
	greeting?: string;
}

class ComponentADef<T> extends React.Component<ComponentAProps<T>, ComponentAState> {
	constructor(props?: ComponentAProps<T>) {
		super(props);
		this.state = { responses: "", greeting: "hello world!" };
	}

	render(): JSX.Element {
		return <div>
			<textarea id="log" readOnly={true} value={this.state.responses} style={{ width: "100%", height: "200px" }}></textarea><br />
			<input type="text" id="text" value={this.state.greeting} onChange={curry(this.onChangeGreeting, this) } /> <button onClick={curry(this.send, this) }>Send</button>
		</div>;
	}

	private send(): void {
		let backend = new Backend("http://localhost:8080");
		let x = new HelloRequest();
		x = x.SetName(this.state.greeting);
		x = x.SetAge(Uint64(20));

		backend.SayHello(x).then((y) => {
			this.setState({ responses: this.state.responses + "\n" + y.Message });
		}, () => {
			console.log("we failed");
		});
	}

	private onChangeGreeting(ev: React.FormEvent): void {
		this.setState({ greeting: (ev.target as HTMLInputElement).value });
	}

}

export function ComponentA<T>(theType: Class<T>): ReactComponentClass<ComponentAProps<T>> {
	return ComponentADef as ReactComponentClass<ComponentAProps<T>>;
}

export function BuildMyComponent(): JSX.Element {
	let x: string = "test";
	let StringComponentA = ComponentA(String);
	return <StringComponentA foo = { x } />;
}
