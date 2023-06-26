import { currentDirectory } from "../shared/currentDirectory.js";
import { join } from 'path';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';

export const calculationHash = (nameFile) => {
    const __dirname = currentDirectory.get();
    const hash = createHash('sha256');
    const pathToFile = join(__dirname, nameFile[0]);
    const readableStream = createReadStream(pathToFile);

    readableStream.on('readable', () => {
        const data = readableStream.read();
        if (data) {
            hash.update(data);
        } else {
            console.log(hash.digest('hex'));
        }
    })
}