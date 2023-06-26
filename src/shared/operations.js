import { listDirectory } from "../list/listDirectory.js";
import { up } from "../navigation/up.js";

export const operations = {
    up: up,
    ls: listDirectory,
}