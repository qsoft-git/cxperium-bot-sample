// Envrionments.
const { NODE_ENV } = process.env;

let nodeEnvWithImportEngine: string = '';

switch (NODE_ENV) {
  case 'development':
    nodeEnvWithImportEngine = '../engine';
    break;

  case 'production':
    nodeEnvWithImportEngine = 'cxperium-bot-engine';
    break;

  default:
    throw new Error('NODE_ENV is not set.');
}

main();

async function main() {
  const { app } = await import(nodeEnvWithImportEngine);

  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
}
