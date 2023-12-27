// Node modules.
import * as dotenv from 'dotenv';

// Load .env file.
dotenv.config();

// Envrionments.
const { LOCAL_ENGINE_STATUS, PORT, HOST, API_KEY, CALLBACK_URL } = process.env;

// Variables.
let nodeEnvWithImportEngine: string = '';

// Set nodeEnvWithImportEngine.
switch (LOCAL_ENGINE_STATUS) {
	case 'true':
		nodeEnvWithImportEngine = '../engine';
		break;

	case 'false':
		nodeEnvWithImportEngine = 'cxperium-bot-engine';
		break;

	default:
		throw new Error('LOCAL_ENGINE_STATUS is not set.');
}

// Run.
main();

async function main(): Promise<void> {
	const { Engine } = await import(nodeEnvWithImportEngine);

	const engine = new Engine({
		port: PORT,
		host: HOST,
		apiKey: API_KEY,
		srcPath: __dirname,
		callbackUrl: CALLBACK_URL,
	});

	engine.listen();
}
