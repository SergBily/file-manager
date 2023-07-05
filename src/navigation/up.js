import { currentDirectory } from "../shared/currentDirectory.js";
import { printMessage } from "../utils/printMessage.js";
import { checkRootFolder } from "./checkRootFolder.js";

export const up = () => {
   const newPathToDirectory = currentDirectory.get().split('\\').slice(0, -1);
   const isRootFolder = checkRootFolder(newPathToDirectory);

   if (isRootFolder) {
      currentDirectory.set(`${newPathToDirectory.join('')}\\`);
   } else {
      currentDirectory.set(newPathToDirectory.join('\\'));
   }
   printMessage({ type: 'CURRENT_DIRECTORY', text: currentDirectory.get() });
};