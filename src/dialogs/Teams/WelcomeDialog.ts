// Node modules.
import {
	IDialog,
	ServiceTeamsBaseDialog,
	TBaseDialogCtor,
} from 'cxperium-bot-engine';

export default class extends ServiceTeamsBaseDialog implements IDialog {
	constructor(data: TBaseDialogCtor) {
		super(data);
	}

	async runDialog() {
		console.log('welcome test one');

		await this.sendMessage('Welcome to the Teams bot!');
	}
}
