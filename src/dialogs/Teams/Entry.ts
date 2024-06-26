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
		const result = await this.services.dialog.runWithAiFrom(
			this,
			this.activity.text,
		);

		await this.sendMessage(result);
	}
}
