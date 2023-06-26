import { EOL, arch, cpus, homedir, hostname } from 'os';
import { cpusProcess } from '../os/cpusProcess.js';

export const osCommands = {
    eol: () => `${EOL}`,
    cpus: () => cpusProcess(cpus()),
    homedir: () => homedir(),
    username: () => hostname(),
    arhitecture: () => arch(),
}