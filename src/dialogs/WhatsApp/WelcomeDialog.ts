// Node modules.
import {
	IDialog,
	ServiceBaseDialog,
	TBaseDialogCtor,
} from 'cxperium-bot-engine';

export default class extends ServiceBaseDialog implements IDialog {
	constructor(data: TBaseDialogCtor) {
		super(data);
	}

	runDialog() {
		if (this.conversation.isWaitAction('testConv')) {
			this.testConv();
			return;
		}

		this.conversation.addWaitAction(
			'CXPerium.Dialogs.WhatsApp.WelcomeDialog',
			'testConv',
		);
		console.log('welcome test one');
	}

	testConv(): void {
		console.log('wait action test');
	}
}
