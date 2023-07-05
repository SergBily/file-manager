export const sortList = (list) => {
    const sortByName = list.sort((a,b) => b.name > a.name ? 1 : -1);
    const sortByType = sortByName.sort((a,b) => a.type > b.type ? 1 : -1);
    return sortByType;
}