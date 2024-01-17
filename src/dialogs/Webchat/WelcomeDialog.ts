// Node modules.
import {
	IDialog,
	ServiceMicrosoftBaseDialog,
	TBaseDialogCtor,
} from 'cxperium-bot-engine';

export default class extends ServiceMicrosoftBaseDialog implements IDialog {
	constructor(data: TBaseDialogCtor) {
		super(data);
	}

	async runDialog() {
		console.log('welcome test one');
	}
}
