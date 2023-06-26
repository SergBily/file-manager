import { currentDirectory } from '../shared/currentDirectory.js';

export const checkPathToDirectory = (directory) => {
    const __dirname = currentDirectory.get();
    return __dirname.match(new RegExp(`${directory}`, 'i'));
}