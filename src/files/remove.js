import { printMessage } from '../utils/printMessage.js';
import { currentDirectory } from '../shared/currentDirectory.js';
import { join } from 'path';
import { rm } from 'fs/promises';

export const remove = async (nameFile) => {
    try {
        const __dirname = currentDirectory.get()
        const pathToFile = join(__dirname, nameFile[0]);
        await rm(pathToFile);
        printMessage({ type: 'CURRENT_DIRECTORY', text: __dirname });
    } catch (error) {
        printMessage({ type: 'ERROR', text: '' });
    }
}