import { cat } from "../files/cat.js";
import { listDirectory } from "../list/listDirectory.js";
import { cd } from "../navigation/cd.js";
import { up } from "../navigation/up.js";

export const operations = {
    up: up,
    ls: listDirectory,
    cd: cd,
    cat: cat,
}