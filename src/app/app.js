import { getHomeDir } from "../os/getHomeDir.js";
import { getUserName } from "../utils/getUserName.js";
import { printMessage } from "../utils/printMessage.js";


export const app = () => {
    const userName = getUserName();
    
    printMessage({ type: 'WELCOME', text: userName });
    printMessage({ type: 'CURRENT_DIRECTORY', text: getHomeDir() });
}