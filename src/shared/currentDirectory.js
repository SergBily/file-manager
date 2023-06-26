import { getHomeDir } from "../os/getHomeDir.js";

class CurrentDirectory {
    path = getHomeDir();

    set(newPath) {
        this.path = newPath;
    }

    get() {
        return this.path;
    }
}

export const currentDirectory = new CurrentDirectory();