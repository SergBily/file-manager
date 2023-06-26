import { currentDirectory } from "../shared/currentDirectory.js";
import { checkRootFolder } from "./checkRootFolder.js";

export const up = () => {
   const newPathToDirectory = currentDirectory.get().split('\\').slice(0, -1);
   const isRootFolder = checkRootFolder(newPathToDirectory);

   if (isRootFolder) {
      currentDirectory.set(`${newPathToDirectory.join('')}\\`);
   } else {
      currentDirectory.set(newPathToDirectory.join('\\'));
   }
};