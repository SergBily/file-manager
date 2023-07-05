import { copy } from "./copy.js";
import { printMessage } from '../utils/printMessage.js';
import { currentDirectory } from '../shared/currentDirectory.js';
import { join } from 'path';
import { rm } from 'fs/promises';

export const move = async (payload) => {
    copy(payload);
    const __dirname = currentDirectory.get();
    const [nameFile] = payload;
    const pathToFile = join(__dirname, nameFile);
    await rm(pathToFile);
}