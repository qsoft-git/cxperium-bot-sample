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

	async runDialog(): Promise<void> {
		//* if you want to finish entry throw this error.
		// throw new Error('end');
	}
}
