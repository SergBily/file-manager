import { opendir } from 'fs/promises';
import { currentDirectory } from '../shared/currentDirectory.js';
import { checkFolderOrFile } from './checkFolderOrFile.js';
import { sortList } from './sortList.js';
import { printMessage } from '../utils/printMessage.js';

export const listDirectory = async () => {
   try {
    const __dirname = currentDirectory.get();
    const list = [];
    const dirents = await opendir(__dirname);

    for await (const dirent of dirents) {
        list.push(checkFolderOrFile(dirent));
    }
    printMessage({ type: 'CURRENT_DIRECTORY', text: __dirname });
    console.table(sortList(list));
   } catch (_error) {
    printMessage({ type: 'ERROR', text: '' });
   }
}