import { printMessage } from '../utils/printMessage.js';
import { currentDirectory } from '../shared/currentDirectory.js';
import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';

export const copy = async (payload) => {
    try {
        const __dirname = currentDirectory.get();
        const [nameFile, pathToNewDirectory] = payload;
        const pathToFile = join(__dirname, nameFile);
        const pathToDirectory = join(__dirname, pathToNewDirectory);
        const pathToNewFile = join(__dirname, pathToNewDirectory, nameFile);
        await access(pathToFile);
        await access(pathToDirectory);
        const readableStream = createReadStream(pathToFile, 'utf-8');
        const writableStream = createWriteStream(pathToNewFile, { flags: 'a' });
        readableStream.pipe(writableStream);

        printMessage({ type: 'CURRENT_DIRECTORY', text: __dirname });
    } catch (_error) {
        printMessage({ type: 'ERROR', text: '' });
    }
}