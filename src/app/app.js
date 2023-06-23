import { getHomeDir } from "../os/getHomeDir.js";
import { getUserName } from "../utils/getUserName.js";
import { printMessage } from "../utils/printMessage.js";
import { createInterface } from 'readline';
import { completer } from "../utils/completer.js";
import { messages } from "../shared/messages.js";
import { commands } from "../shared/commands.js";
import { checkCommandValid } from "../utils/checkCommandValid.js";
import { operations } from "../shared/operations.js";
import { currentDirectory } from "../shared/currentDirectory.js";


export const app = () => {
    const userName = getUserName();

    printMessage({ type: 'WELCOME', text: userName });
    printMessage({ type: 'CURRENT_DIRECTORY', text: getHomeDir() });

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        completer,
        // prompt: `${messages.CURRENT_DIRECTORY(getHomeDir())}\n`,
    })

    rl.on('line', (input) => {
        const commandWithArg = completer(input);

        if (input === commands.EXIT) {
            rl.close();
        } else if(checkCommandValid(commandWithArg)) {
            console.log(process.cwd());
            rl.prompt();
            operations[commandWithArg[0]]();
            printMessage({ type: 'CURRENT_DIRECTORY', text: currentDirectory });
        } else {
            printMessage({ type: 'INVALID_INPUT', text: '' });
        }

    })
    .on('close', () => {
        printMessage({ type: 'EXIT', text: userName });
    })
}