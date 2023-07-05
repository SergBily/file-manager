export const checkFolderOrFile = (dirent) => {
    return {
        name: dirent.name,
        type: dirent.isFile()  ? 'file' : 'directory',
    }
}