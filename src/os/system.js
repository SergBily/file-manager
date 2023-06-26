import { EOL } from 'os';
import { osCommands } from '../shared/osCommands.js';
import { printMessage } from '../utils/printMessage.js';
import { currentDirectory } from '../shared/currentDirectory.js';

export const system = (arg) => {
    const __dirname = currentDirectory.get();
    const argument = arg[0].slice(2).toLowerCase();
    printMessage({ type: 'CURRENT_DIRECTORY', text: __dirname });
    console.log(osCommands[argument]());
}