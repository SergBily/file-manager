export const getUserName = () => {
    const argsWithoutDir = process.argv.slice(2);
    return argsWithoutDir.length ? argsWithoutDir[0].split('=')[1] : 'Anonymous';
}