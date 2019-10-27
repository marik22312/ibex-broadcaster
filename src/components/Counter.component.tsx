import * as React from 'react';
import { observer, inject } from 'mobx-react';
const electron = window.require('electron'); // TODO: remove. just for tests

@inject('countStore')
@observer
export default class CounterComponent extends React.Component<{
	countStore?: any;
	stores?: any
},{}> {
	constructor(props: any) {
		super(props);
	}

	public componentDidMount() {
		console.log(electron)
	}

	public render() {

		const { countStore } = this.props;
		return (
			<div>{countStore.count}</div>
		)
	}
}