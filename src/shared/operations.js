import { add } from "../files/add.js";
import { cat } from "../files/cat.js";
import { copy } from "../files/copy.js";
import { move } from "../files/move.js";
import { remove } from "../files/remove.js";
import { rn } from "../files/rename.js";
import { calculationHash } from "../hash/calculationHash.js";
import { listDirectory } from "../list/listDirectory.js";
import { cd } from "../navigation/cd.js";
import { up } from "../navigation/up.js";
import { system } from "../os/system.js";
import { compress } from "../zlib/compress.js";
import { decompress } from "../zlib/decompress.js";

export const operations = {
    up: up,
    ls: listDirectory,
    cd: cd,
    cat: cat,
    add: add,
    rn: rn,
    rm: remove,
    cp: copy,
    mv: move,
    os: system,
    hash: calculationHash,
    compress: compress,
    decompress: decompress,
}