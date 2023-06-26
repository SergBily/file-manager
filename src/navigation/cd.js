import { join } from "path";
import { currentDirectory } from "../shared/currentDirectory.js";
import { printMessage } from "../utils/printMessage.js";
import { stat } from "fs/promises";

const __dirname = currentDirectory.get();

export const cd = async (arg) => {
    try {
        const goalDirectory = join(__dirname, arg[0]);
        console.log(goalDirectory,55);
        const s = await stat(goalDirectory);
        if (s.isDirectory()) {
            console.log(15);
            currentDirectory.set(goalDirectory); 
        } else {
            throw new Error();
        }
        printMessage({ type: 'CURRENT_DIRECTORY', text: currentDirectory.get() });
    } catch (_error) {
        console.log(_error);
        printMessage({ type: 'ERROR', text: '' });
    }
}