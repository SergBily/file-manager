export const validCommandsPatterns = {
    up: ['up'],
    cd: ['cd', 'path_to_directory'],
    ls: ['ls'],
    cat: ['cat', 'path_to_file'],
    add: ['add', 'new_file_name'],
    rn: ['rn', 'path_to_file', 'new_filename'],
    rm: ['rm', 'path_to_file'],
    cp: ['cp', 'path_to_file', 'path_to_new_directory'],
    mv: ['mv', 'path_to_file', 'path_to_new_directory'],
    os: ['os', 'arguments'],
    hash: ['hash', 'path_to_file'],
    compress: ['compress', 'path_to_file', 'path_to_destination'],
    decompress: ['decompress', 'path_to_file', 'path_to_destination'],
}