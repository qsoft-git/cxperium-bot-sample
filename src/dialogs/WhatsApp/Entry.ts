// Node modules.
import {
	IDialog,
	ServiceWhatsappBaseDialog,
	TBaseDialogCtor,
	// IMessageEvent,
} from 'cxperium-bot-engine';

export default class extends ServiceWhatsappBaseDialog implements IDialog {
	constructor(data: TBaseDialogCtor) {
		super(data);
	}

	// IMessageEvent interface implementation OPTIONAL
	// onFileReceived(messageObject: any): void;
	// onChatGPTMessage(messageObject: TIntentPrediction): void;
	// onDialogflowMessage(messageObject: TIntentPrediction): void;
	// onDidNotUnderstand(): void;
	// onSessionTimeout?(): void;
	// onClosingOfLiveChat?(): void;

	async runDialog(): Promise<void> {
		//* if you want to finish entry throw this error.
		// throw new Error('end');
	}
}
