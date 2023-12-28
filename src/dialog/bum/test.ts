// Node modules.
import { IDialog, ServiceBaseDialog } from 'cxperium-bot-engine';

export default class extends ServiceBaseDialog implements IDialog {
	constructor(data: any) {
		console.log('Test Dialog', data);
		super(data);
	}

	runDialog() {
		console.log('Run Rialog - Test');
	}
}
