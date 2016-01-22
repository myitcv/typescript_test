import * as React from "react";
import * as ReactDOM from "react-dom";
import {curry} from "./lang";
import {Uint64} from "./custom_types";
import {HelloRequest, TestMessage, OneoffieldEnum} from "./immut_helloworld";
import {Backend} from "./api_endpoint";

interface ComponentAProps<T> {
	foo: T;
}

interface ComponentAState {
	responses?: string;
	greeting?: string;
	oneof_field_type?: OneoffieldEnum;
	test_message?: TestMessage;
	oneof_field_value?: string;
}

class ComponentADef<T> extends React.Component<ComponentAProps<T>, ComponentAState> {
	constructor(props?: ComponentAProps<T>) {
		super(props);
		this.state = { responses: "", greeting: "hello world!", oneof_field_type: TestMessage.OneoffieldCase.ONEOFFIELD_NOT_SET, test_message: new TestMessage(), oneof_field_value: "" };
	}

	render(): JSX.Element {
		return <div>
					 <textarea id="log" readOnly={true} value={this.state.responses} style={{ width: "100%", height: "200px" }}></textarea><br />
					 <input type="text" id="text" value={this.state.greeting} onChange={curry(this.onChangeGreeting, this) } /> <button onClick={curry(this.send, this) }>Send</button>
					 <div style={{ margin: "5px", padding: "5px" }}>
						 <label>Name: </label><input type="text" id="person-name" />
						 <div style={{ margin: "5px", padding: "5px" }}>
							 <input type="radio" name="contact-group" id="no-contact-info" onClick={curry(this.setNoContact, this) } defaultChecked /><label>No Contact Information</label>
								</div>
						 <div style={{ margin: "5px", padding: "5px" }}>
							 <input type="radio" name="contact-group" id="personal-email"
								 onClick={curry(this.setEmailContact, this) }/>
							 <label> Email </label>
							 <input type="text" id="contact-email"
								 value={this.state.oneof_field_type === TestMessage.OneoffieldCase.ONEOFSTRINGFIELD ? this.state.oneof_field_value : ""}
								 ref="contact-email"
								 onChange={curry(this.updateContactInformation, this) }
								 disabled={this.state.oneof_field_type === TestMessage.OneoffieldCase.ONEOFSTRINGFIELD ? false : true} />
								</div>
						 <div style={{ margin: "5px", padding: "5px" }}>
							 <input type="radio" name="contact-group" id="personal-mobile"
								 onClick={curry(this.setMobileContact, this) }/>
							 <label> Mobile </label>
							 <input type="text" id="contact-mobile"
								 value={this.state.oneof_field_type === TestMessage.OneoffieldCase.ONEOFUINT64FIELD ? this.state.oneof_field_value : ""}
								 ref="contact-mobile"
								 onChange={curry(this.updateContactInformation, this) }
								 disabled={this.state.oneof_field_type === TestMessage.OneoffieldCase.ONEOFUINT64FIELD ? false : true}/>
								</div>

						 <button id="set-contact-info"
							 onClick={curry(this.setContactInformation, this) }>Set Contact Information</button>
							</div>
			</div>;
	}

	private setNoContact(): void {
		this.setState({ oneof_field_type: TestMessage.OneoffieldCase.ONEOFFIELD_NOT_SET, oneof_field_value: "" });
	}

	private setEmailContact(): void {
		this.setState({ oneof_field_type: TestMessage.OneoffieldCase.ONEOFSTRINGFIELD, oneof_field_value: "" });
		(ReactDOM.findDOMNode(this.refs["contact-email"]) as HTMLElement).focus();
	}

	private setMobileContact(): void {
		this.setState({ oneof_field_type: TestMessage.OneoffieldCase.ONEOFUINT64FIELD, oneof_field_value: "" });
		(ReactDOM.findDOMNode(this.refs["contact-mobile"]) as HTMLElement).focus();
	}

	private updateContactInformation(ev: React.FormEvent): void {
		this.setState({ oneof_field_value: (ev.target as HTMLInputElement).value });
	}

	private setContactInformation(): void {
		let value: string;
		let testMessage = this.state.test_message;
		let name = (document.getElementById("person-name") as HTMLInputElement).value;
		if (name === " " || name.length === 0) {
			throw new Error("Name Field cannot be empty");
		} else {
			testMessage = testMessage.SetStringField(name);
		}
		switch (this.state.oneof_field_type) {
			case TestMessage.OneoffieldCase.ONEOFFIELD_NOT_SET:
				testMessage = testMessage.ClearOneofStringField();
				testMessage = testMessage.ClearOneofUint64Field();
				break;
			case TestMessage.OneoffieldCase.ONEOFUINT64FIELD:
				value = (document.getElementById("contact-mobile") as HTMLInputElement).value;
				if (value === " " || value.length === 0) {
					throw new Error("Field cannot be left empty");
				} else {
					testMessage = testMessage.SetOneofUint64Field(Uint64.Parse(value));
				}
				break;
			case TestMessage.OneoffieldCase.ONEOFSTRINGFIELD:
				value = (document.getElementById("contact-email") as HTMLInputElement).value;
				if (value === " " || value.length === 0) {
					throw new Error("Field cannot be left empty");
				} else {
					testMessage = testMessage.SetOneofStringField(value);
				}
				break;
			default:
				throw new Error("Unknown state");
		};
		this.setState({ test_message: testMessage });
	}

	private send(): void {
		let backend = new Backend("http://localhost:8080");
		let x = new HelloRequest();
		x = x.SetName(this.state.greeting);
		x = x.SetAge(Uint64(20));

		let testMessage = this.state.test_message;
		let name = testMessage.StringField ? testMessage.StringField : "No Name Set";
		let contactInfo = "";
		switch (testMessage.GetOneofFieldCase()) {
			case TestMessage.OneoffieldCase.ONEOFFIELD_NOT_SET:
				contactInfo = "No Contact Information has been set";
				break;
			case TestMessage.OneoffieldCase.ONEOFUINT64FIELD:
				contactInfo = "Mobile: " + testMessage.OneofUint64Field.toNumber();
				break;
			case TestMessage.OneoffieldCase.ONEOFSTRINGFIELD:
				contactInfo = "Email: " + testMessage.OneofStringField;
				break;
			default:
				throw new Error("Unknown enumeration value");
		}

		backend.SayHello(x).then((y) => {
			this.setState({ responses: this.state.responses + "\n" + y.Message + ", Name: " + name + ", Contact Information: " + contactInfo });
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
