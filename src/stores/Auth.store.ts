import { observable, computed, action, runInAction } from 'mobx';

export class CountStore {

	@observable _count: number = 0;
	constructor() {
		this._count = 0;
	}

	@computed get count() {
		return this._count;
	}

	@action async addCount() {
		this._count++;
	}
}