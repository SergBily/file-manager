import { createReadStream, createWriteStream} from 'fs'
import { join } from 'path';
import { createBrotliCompress } from "zlib";
import { currentDirectory } from '../shared/currentDirectory.js';
import { access } from 'fs/promises';
import { printMessage } from '../utils/printMessage.js';

export const compress = async (payload) => {
    try {
        const __dirname = currentDirectory.get();
        const [nameFile, ZipNameFile] = payload;
        const pathToFile = join(__dirname, nameFile);
        const pathToZipFile = join(__dirname, ZipNameFile);

        await access(pathToFile);

        const readableStream = createReadStream(pathToFile);
        const writableStream = createWriteStream(pathToZipFile);
        const brotli = createBrotliCompress();

        readableStream.pipe(brotli).pipe(writableStream);
        printMessage({ type: 'CURRENT_DIRECTORY', text: __dirname });
    } catch (error) {
        printMessage({ type: 'ERROR', text: '' });
    }
}