import { currentDirectory } from "../shared/currentDirectory.js";
import { printMessage } from "../utils/printMessage.js";
import { createReadStream } from 'fs';
import { join } from "path";
import { access } from "fs/promises";


export const cat = async (nameFile) => {
    try {
        const pathToFile = join(currentDirectory.get(), nameFile[0]);
        await access(pathToFile);
        const readableStream = createReadStream(pathToFile, 'utf-8');
        readableStream.on('data', (data) => {
            console.log(data);
        })
        printMessage({ type: 'CURRENT_DIRECTORY', text: currentDirectory.get() });
    } catch (_error) {
        printMessage({ type: 'ERROR', text: '' });
    }
}