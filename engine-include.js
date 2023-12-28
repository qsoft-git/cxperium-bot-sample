// Node modules.
const fs = require('fs');
const path = require('path');

// Get mode from command line arguments.
const mode = process.argv[2];

// Check mode is valid.
const modeControl = ['yes', 'no'].includes(mode);

// If mode is not valid, throw error.
if (!modeControl) throw new Error('Mode is not valid!');

// Get package.json path.
const packageJsonPath = path.resolve(__dirname, 'package.json');

// Get package.json.
const packageJson = require(packageJsonPath);

// Set engine dependency.
switch (mode) {
	case 'yes':
		packageJson.dependencies['cxperium-bot-engine'] = 'file:./engine';
		break;
	case 'no':
		packageJson.dependencies['cxperium-bot-engine'] = '^1.0.16';
		break;
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
