import { createReadStream, createWriteStream} from 'fs'
import { join } from 'path';
import { createBrotliDecompress } from "zlib";
import { currentDirectory } from '../shared/currentDirectory.js';
import { access } from 'fs/promises';
import { printMessage } from '../utils/printMessage.js';
import { checkExtension } from './checkExtension.js';

export const decompress = async (payload) => {
    try {
        const __dirname = currentDirectory.get();
        const [nameFile, ZipNameFile] = payload;
        const pathToFile = join(__dirname, nameFile);
        const pathToZipFile = join(__dirname, ZipNameFile);
        if (!checkExtension(nameFile)) {
            throw new Error();
        };

        await access(pathToFile);

        const readableStream = createReadStream(pathToFile);
        const writableStream = createWriteStream(pathToZipFile);
        const brotli = createBrotliDecompress();

        readableStream.pipe(brotli).pipe(writableStream);
        printMessage({ type: 'CURRENT_DIRECTORY', text: __dirname });
    } catch (error) {
        printMessage({ type: 'ERROR', text: '' });
    }
}