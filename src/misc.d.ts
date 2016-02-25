interface Class<T> {
	new (): T;
}

interface ReactComponentClass<P> {
	new (props?: P, context?: {}): __React.Component<P, {}>;
}
