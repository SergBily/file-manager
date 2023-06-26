import { join } from "path";
import { currentDirectory } from "../shared/currentDirectory.js";
import { printMessage } from "../utils/printMessage.js";
import { stat } from "fs/promises";

export const cd = async (arg) => {
    try {
        const __dirname = currentDirectory.get();
        const goalDirectory = join(__dirname, arg[0]);
        const s = await stat(goalDirectory);
        if (s.isDirectory()) {
            currentDirectory.set(goalDirectory); 
        } else {
            throw new Error();
        }
        printMessage({ type: 'CURRENT_DIRECTORY', text: currentDirectory.get() });
    } catch (_error) {
        printMessage({ type: 'ERROR', text: '' });
    }
}