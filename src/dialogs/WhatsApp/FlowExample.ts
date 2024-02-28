// Node modules.
import {
	IDialog,
	IFlow,
	ServiceWhatsappBaseDialog,
	TBaseDialogCtor,
} from 'cxperium-bot-engine';

export default class
	extends ServiceWhatsappBaseDialog
	implements IDialog, IFlow
{
	constructor(data: TBaseDialogCtor) {
		super(data);
	}

	async runDialog(): Promise<void> {
		await this.sendFlowMessage(
			'header',
			'body',
			'footer',
			'CXPerium.Dialogs.WhatsApp.FlowExample',
			'1074013033730193',
			'Reservation Request', // => CTA button title.
			'RESERVATION_SCREEN', // => Given screen of the flow
			null,
		);
	}

	async recieveFlow(): Promise<void> {
		// To catch the flow response, you have to implement the IFlow interface.
		// console.log(this.activity.flow.responseJson);
	}
}
