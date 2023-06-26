import { opendir } from 'fs/promises';
import { currentDirectory } from '../shared/currentDirectory.js';
import { checkFolderOrFile } from './checkFolderOrFile.js';
import { sortList } from './sortList.js';
import { printMessage } from '../utils/printMessage.js';

export const listDirectory = async () => {
   try {
    const list = [];
    const dirents = await opendir(currentDirectory.get());

    for await (const dirent of dirents) {
        list.push(checkFolderOrFile(dirent));
    }
    console.table(sortList(list));
   } catch (_error) {
    printMessage({ type: 'ERROR', text: '' });
   }
}