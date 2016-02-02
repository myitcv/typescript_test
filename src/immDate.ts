import * as Immutable from "immutable";
import * as Lang from "./lang";

export type ImmutableKey = Immutable.IndexedSeq<primitive>;

export type primitive = string | number | boolean | ImmDate;

export type primitiveList = Immutable.List<string> | Immutable.List<number> | Immutable.List<boolean> | Immutable.List<ImmDate>;

export interface IMap<T> {
	[key: string]: T;
}

// TODO finish implementation, particularly of overloads
// getDate            (method) Date.getDate(): number
// getDay             (method) Date.getDay(): number
// getFullYear        (method) Date.getFullYear(): number
// getHours           (method) Date.getHours(): number
// getMilliseconds    (method) Date.getMilliseconds(): number
// getMinutes         (method) Date.getMinutes(): number
// getMonth           (method) Date.getMonth(): number
// getSeconds         (method) Date.getSeconds(): number
// getTime            (method) Date.getTime(): number
// getTimezoneOffset  (method) Date.getTimezoneOffset(): number
// getUTCDate         (method) Date.getUTCDate(): number
// getUTCDay          (method) Date.getUTCDay(): number
// getUTCFullYear     (method) Date.getUTCFullYear(): number
// getUTCHours        (method) Date.getUTCHours(): number
// getUTCMilliseconds (method) Date.getUTCMilliseconds(): number
// getUTCMinutes      (method) Date.getUTCMinutes(): number
// getUTCMonth        (method) Date.getUTCMonth(): number
// getUTCSeconds      (method) Date.getUTCSeconds(): number
// setDate            (method) Date.setDate(date: number): number
// setFullYear        (method) Date.setFullYear(year: number, month?: number, date?: number): number
// setHours           (method) Date.setHours(hours: number, min?: number, sec?: number, ms?: number): number
// setMilliseconds    (method) Date.setMilliseconds(ms: number): number
// setMinutes         (method) Date.setMinutes(min: number, sec?: number, ms?: number): number
// setMonth           (method) Date.setMonth(month: number, date?: number): number
// setSeconds         (method) Date.setSeconds(sec: number, ms?: number): number
// setTime            (method) Date.setTime(time: number): number
// setUTCDate         (method) Date.setUTCDate(date: number): number
// setUTCFullYear     (method) Date.setUTCFullYear(year: number, month?: number, date?: number): number
// setUTCHours        (method) Date.setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number
// setUTCMilliseconds (method) Date.setUTCMilliseconds(ms: number): number
// setUTCMinutes      (method) Date.setUTCMinutes(min: number, sec?: number, ms?: number): number
// setUTCMonth        (method) Date.setUTCMonth(month: number, date?: number): number
// setUTCSeconds      (method) Date.setUTCSeconds(sec: number, ms?: number): number
//
// toLocaleString     (method) Date.toLocaleString(): string (+2 overloads)
export class ImmDate {
	private date: number;
	private mutationFlag: boolean = false;

	static get CLASS_NAME(): string { return "ImmDate"; }

	static NewImmDate(utc: number): ImmDate;
	static NewImmDate(toParse: string): ImmDate;
	static NewImmDate(year: number, month: number, day?: number, hour?: number, minutes?: number, seconds?: number, milliseconds?: number): ImmDate;

	static NewImmDate(year: Object, month?: number, day?: number, hour?: number, minutes?: number, seconds?: number, milliseconds?: number): ImmDate {
		if (Lang.isNumber(year) && Lang.isUndefined(month) && Lang.isUndefined(day) && Lang.isUndefined(hour) && Lang.isUndefined(minutes) && Lang.isUndefined(seconds) && Lang.isUndefined(milliseconds)) {
			return ImmDate.newImmDate(new Date(<number>year).valueOf());
		} else if (Lang.isString(year) && Lang.isUndefined(month) && Lang.isUndefined(day) && Lang.isUndefined(hour) && Lang.isUndefined(minutes) && Lang.isUndefined(seconds) && Lang.isUndefined(milliseconds)) {
			return ImmDate.newImmDate(new Date(<string>year).valueOf());
		} else {
			return ImmDate.newImmDate(new Date(<number>year, month, day, hour, minutes, seconds, milliseconds).valueOf());
		}
	}

	private static newImmDate(date: number, mutationFlag: boolean = false): ImmDate {
		let res = new ImmDate();
		res.date = date;
		res.mutationFlag = mutationFlag;
		return res;
	}

	GetDay(): number {
		return new Date(this.date).getDay();
	}
	SetFullYear(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setFullYear(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetFullYear(): number {
		return new Date(this.date).getFullYear();
	}
	SetHours(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setHours(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetHours(): number {
		return new Date(this.date).getHours();
	}
	SetMilliseconds(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setMilliseconds(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetMilliseconds(): number {
		return new Date(this.date).getMilliseconds();
	}
	SetMinutes(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setMinutes(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetMinutes(): number {
		return new Date(this.date).getMinutes();
	}
	SetMonth(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setMonth(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetMonth(): number {
		return new Date(this.date).getMonth();
	}
	SetSeconds(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setSeconds(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetSeconds(): number {
		return new Date(this.date).getSeconds();
	}
	SetTime(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setTime(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetTime(): number {
		return new Date(this.date).getTime();
	}

	GetTimezoneOffset(): number {
		return new Date(this.date).getTimezoneOffset();
	}
	SetUTCDate(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setUTCDate(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetUTCDate(): number {
		return new Date(this.date).getUTCDate();
	}

	GetUTCDay(): number {
		return new Date(this.date).getUTCDay();
	}
	SetUTCFullYear(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setUTCFullYear(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetUTCFullYear(): number {
		return new Date(this.date).getUTCFullYear();
	}
	SetUTCHours(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setUTCHours(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetUTCHours(): number {
		return new Date(this.date).getUTCHours();
	}
	SetUTCMilliseconds(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setUTCMilliseconds(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetUTCMilliseconds(): number {
		return new Date(this.date).getUTCMilliseconds();
	}
	SetUTCMinutes(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setUTCMinutes(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetUTCMinutes(): number {
		return new Date(this.date).getUTCMinutes();
	}
	SetUTCMonth(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setUTCMonth(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetUTCMonth(): number {
		return new Date(this.date).getUTCMonth();
	}
	SetUTCSeconds(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setUTCSeconds(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetUTCSeconds(): number {
		return new Date(this.date).getUTCSeconds();
	}

	SetDate(v: number): ImmDate {
		let newDate = new Date(this.date);
		newDate.setDate(v);
		return this.newImmDate(newDate.valueOf());
	}

	GetDate(): number {
		return new Date(this.date).getDate();
	}

	ToDateString(): string {
		return new Date(this.date).toDateString();
	}

	ToISOString(): string {
		return new Date(this.date).toISOString();
	}

	ToJSON(key?: Object): string {
		return new Date(this.date).toJSON(key);
	}

	ToLocaleDateString(): string {
		return new Date(this.date).toLocaleDateString();
	}

	ToLocaleTimeString(): string {
		return new Date(this.date).toLocaleTimeString();
	}

	ToTimeString(): string {
		return new Date(this.date).toTimeString();
	}

	ToUTCString(): string {
		return new Date(this.date).toUTCString();
	}

	ValueOf(): number {
		return new Date(this.date).valueOf();
	}

	ToString(): string {
		return new Date(this.date).toString();
	}

	AsMutable(): ImmDate {
		return this.newImmDate(this.date, true);
	}

	AsImmutable(): ImmDate {
		this.mutationFlag = false;
		return this;
	}

	WithMutations(cb: (a: ImmDate) => void): ImmDate {
		let res = this.AsMutable();
		cb(res);
		res.AsImmutable();
		return res;
	}

	private newImmDate(date: number, mutationFlag: boolean = this.mutationFlag): ImmDate {
		let res = this.mutationFlag ? this : new ImmDate();
		res.date = date;
		res.mutationFlag = mutationFlag;
		return res;
	}
}

