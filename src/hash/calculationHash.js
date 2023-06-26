import { currentDirectory } from "../shared/currentDirectory.js";
import { join } from 'path';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { printMessage } from "../utils/printMessage.js";
import { access } from 'fs/promises';

export const calculationHash = async (nameFile) => {
    try {
        const __dirname = currentDirectory.get();
        const hash = createHash('sha256');
        const pathToFile = join(__dirname, nameFile[0]);

        await access(pathToFile);

        const readableStream = createReadStream(pathToFile);

        readableStream.on('readable', () => {
            const data = readableStream.read();
            if (data) {
                hash.update(data);
            } else {
                console.log(hash.digest('hex'));
            }
        })
        printMessage({ type: 'CURRENT_DIRECTORY', text: __dirname });
    } catch (_error) {
        printMessage({ type: 'ERROR', text: '' });
    }
}