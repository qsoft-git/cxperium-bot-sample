// Node modules.
import * as path from 'path';

// Envrionments.
const { LOCAL_ENGINE_STATUS, NODE_ENV, PORT, HOST } = process.env;

// Variables.
let nodeEnvWithImportEngine: string = '';

// Constants.
const port: string = PORT || '3000';
const host: string = HOST || 'localhost';
const mode: any = NODE_ENV || null;
const DIALOG_PATH: string = path.join(__dirname, '/', 'dialog');
const PUBLIC_PATH: string = path.join(__dirname, '/', 'public');

// Set nodeEnvWithImportEngine.
switch (LOCAL_ENGINE_STATUS) {
	case 'true':
		nodeEnvWithImportEngine = '../engine';
		break;

	case 'false':
		nodeEnvWithImportEngine = 'cxperium-bot-engine';
		break;

	default:
		throw new Error('NODE_ENV is not set.');
}

// Run.
main();

async function main(): Promise<void> {
	const { Engine } = await import(nodeEnvWithImportEngine);

	const engine = new Engine({
		port,
		host,
		mode,
		apiKey: '1234567890',
		dialogPath: DIALOG_PATH,
		publicPath: PUBLIC_PATH,
	});

	engine.listen();
}
