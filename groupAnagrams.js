// simple but slow - using sort
function groupAnagrams(strs) {
    const groupsDict = {};
    const groups = [];

    strs.forEach(str => {
        let strSorted = str.split('');
        strSorted.sort();
        strSorted = strSorted.join('');
        
        groupsDict[strSorted] ??= groups.length;
        groups[groupsDict[strSorted]] ??= [];
        groups[groupsDict[strSorted]].push(str);

    });
    return groups;
}

console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"])); // [["hat"],["act", "cat"],["stop", "pots", "tops"]]
