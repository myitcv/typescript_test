import * as React from "react";
import {helloworld} from "./helloworld";
import {curry} from "./lang";

// **************************
// Define a generic component
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

	private send(): void {
		let x = new helloworld.HelloRequest();
		x.setName(this.state.greeting);
		let r = new Request("/SayHello", { method: "POST", body: x.serializeBinary(), mode: "cors" });
		fetch(r).then((response) => response.arrayBuffer()).then((response) => {
			var arr = new Uint8Array(response);
			var y = helloworld.HelloReply.deserializeBinary(arr);
			this.setState({responses: this.state.responses + "\n" + y.getMessage()});
		}, () => {
			console.log("we failed");
		});
	}

	private onChangeGreeting(ev: React.FormEvent): void {
		this.setState({ greeting: (ev.target as HTMLInputElement).value });
	}

	render(): JSX.Element {
		return <div>
					 <textarea id="log" readOnly={true} value={this.state.responses} style={{ width: "100%", height: "200px" }}></textarea><br />
					 <input type="text" id="text" value={this.state.greeting} onChange={curry(this.onChangeGreeting, this) } /> <button onClick={curry(this.send, this)}>Send</button>
			</div>;
	}
}

export function ComponentA<T>(theType: Class<T>): ReactComponentClass<ComponentAProps<T>> {
	return ComponentADef as ReactComponentClass<ComponentAProps<T>>;
}
// **************************

export function BuildMyComponent(): JSX.Element {
	let x: string = "test";
	let StringComponentA = ComponentA(String);
	return <StringComponentA foo = { x } />;
}
