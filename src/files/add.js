import { writeFile } from 'fs/promises';
import { printMessage } from '../utils/printMessage.js';
import { currentDirectory } from '../shared/currentDirectory.js';
import { join } from 'path';

const __dirname = currentDirectory.get();

export const add = async (nameFile) => {
    try {
        const pathToFile = join(__dirname, nameFile[0]);
        await writeFile(pathToFile, '', { flag: 'wx' });
        printMessage({ type: 'CURRENT_DIRECTORY', text: __dirname });
    } catch (_error) {
        printMessage({ type: 'ERROR', text: '' });
    }
}