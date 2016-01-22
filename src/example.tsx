import * as React from "react";
import {curry} from "./lang";
import {Uint64} from "./custom_types";
import {HelloRequest} from "./immut_helloworld";
import {Backend} from "./api_endpoint";
import {ImmDate} from "./immDate";

interface ComponentAProps<T> {
	foo: T;
}

interface ComponentAState {
	responses?: string;
	greeting?: string;
	seconds?: string;
	microseconds?: string;
	milliseconds?: string;
}

class ComponentADef<T> extends React.Component<ComponentAProps<T>, ComponentAState> {
	constructor(props?: ComponentAProps<T>) {
		super(props);
		this.state = { responses: "", greeting: "hello world!", seconds: "0", microseconds: "0" };
	}

	render(): JSX.Element {
		return <div>
					 <textarea id="log" readOnly={true} value={this.state.responses} style={{ width: "100%", height: "200px" }}></textarea><br />
					 <input type="text" id="text" value={this.state.greeting} onChange={curry(this.onChangeGreeting, this) } /><br/>
					 <label itemRef={"sec"} >Seconds: </label>
					 <input id={"sec"} type="text" value={this.state.seconds} onChange={curry(this.onChangeGreeting, this) }/><br/>
					 <label itemRef={"msec"} >Microseconds: </label>
					 <input id={"msec"} type="text" value={this.state.microseconds} onChange={curry(this.onChangeGreeting, this) }/><br/>
					 <label itemRef={"epoch"} >MilliSeconds: </label>
					 <input id={"epoch"} type="text" value={this.state.milliseconds} onChange={curry(this.onChangeGreeting, this) }/><br/>
					 <button onClick={curry(this.GetMilliSeconds, this) }>GetMilliSeconds</button>
					 <button onClick={curry(this.send, this) }>Send</button><br/>
			</div>;
	}

	private GetMilliSeconds(): void {
		let t = new Date().valueOf();
		this.setState({
			milliseconds: (t).toString(),
			microseconds: (t * 1000).toString(),
			seconds: (t * 1000 * 1000).toString()
		});
	}

	private send(): void {
		let backend = new Backend("http://localhost:8080");
		let x = new HelloRequest();
		x = x.SetName(this.state.greeting);
		x = x.SetAge(Uint64(20));
		x = x.SetDob(ImmDate.NewImmDate(parseInt(this.state.milliseconds, 10)));

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
