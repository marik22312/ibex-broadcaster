import * as React from 'react';
import { observer, inject } from 'mobx-react';

@inject('countStore')
@observer
export default class Button extends React.Component<{
	countStore?: any;
	stores?: any
},{}> {
	constructor(props: any) {
		super(props);
	}

	public render() {

		const { countStore } = this.props;
		return (
			<button onClick={() => countStore.addCount()}>click </ button>
		)
	}
}