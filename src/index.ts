// Node modules.
import * as dotenv from 'dotenv';

// Load .env file.
dotenv.config();

// Envrionments.
const { PORT, HOST, API_KEY, CALLBACK_URL } = process.env;

// Run.
main();

async function main(): Promise<void> {
	const { Engine } = await import('cxperium-bot-engine');

	const engine = new Engine({
		port: PORT,
		host: HOST,
		apiKey: API_KEY,
		srcPath: __dirname,
		callbackUrl: CALLBACK_URL,
	});

	engine.execute();
}
