import { printMessage } from '../utils/printMessage.js';
import { currentDirectory } from '../shared/currentDirectory.js';
import { join } from 'path';
import { rename } from 'fs/promises';

const __dirname = currentDirectory.get();

export const rn = async (payload) => {
    try {
        const [nameFile, newNameFile] = payload;
        const pathToFile = join(__dirname, nameFile);
        const newPathToFile = join(__dirname, newNameFile);
        await rename(pathToFile, newPathToFile);
        printMessage({ type: 'CURRENT_DIRECTORY', text: __dirname });
    } catch (error) {
        printMessage({ type: 'ERROR', text: '' });
    }
}