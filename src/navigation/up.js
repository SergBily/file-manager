import { currentDirectory } from "../shared/currentDirectory.js";

export const up = () => {
     currentDirectory = currentDirectory.split('/').slice(0, -1).join('/');
};