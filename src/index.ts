// Node modules.
import * as dotenv from 'dotenv';

// Load .env file.
dotenv.config();

// Exucute chatbot.
(async () => {
	// Import engine.
	const { Engine } = await import('cxperium-bot-engine');

	// Initialize engine.
	const engine = new Engine(__dirname);

	// Execute engine.
	engine.execute();
})();
