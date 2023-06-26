import { writeFile } from 'fs/promises';
import { printMessage } from '../utils/printMessage.js';
import { currentDirectory } from '../shared/currentDirectory.js';
import { join } from 'path';

export const add = async (nameFile) => {
    try {
        const pathToFile = join(currentDirectory.get(), nameFile[0]);
        await writeFile(pathToFile, '', { flag: 'wx' });
        printMessage({ type: 'CURRENT_DIRECTORY', text: currentDirectory.get() });
    } catch (_error) {
        printMessage({ type: 'ERROR', text: '' });
    }
}