// Node modules.
import {
	IDialog,
	ServiceWhatsappBaseDialog,
	TBaseDialogCtor,
} from 'cxperium-bot-engine';

export default class extends ServiceWhatsappBaseDialog implements IDialog {
	constructor(data: TBaseDialogCtor) {
		super(data);
	}

	async runDialog(): Promise<void> {
		if (this.conversation.isWaitAction('ticket_entry')) {
			const text = this.activity.text;

			console.log('Ticket Entry:', text);

			this.services.cxperium.ticket.create(
				'Test 001',
				this.contact._id,
				text,
				[],
			);

			this.conversation.resetConversation();
			return;
		}

		this.sendMessage('Lütfen talebinizi giriniz:');

		this.conversation.addWaitAction('ticket_entry');
	}
}
