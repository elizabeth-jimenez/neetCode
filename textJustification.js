function fullJustify(words, maxWidth) {
    let res = [];
    let currLine = [];
    let currLineLen = 0;
    let currLineWordCnt = 0;

    words.forEach((w, i) => {
        let isLastWord = (i ===  words.length - 1);
        let outprocessLine = false;

        //add current word
        currLine.push(w);
        currLineLen += w.length;
        currLineWordCnt++;
        
        //check next word
        if(!isLastWord) {
            outprocessLine = (currLineLen + 1 + words[i+1].length) > maxWidth;
        }

        //add space
        if(!outprocessLine) {
            currLine.push(' ');
            currLineLen++;
        }
        if(outprocessLine || isLastWord) { // if next word puts us over maxWidth OR isLastWord, outprocess line
            let spacesToAdd = maxWidth - currLineLen;
            // if one word or last line, add all spaces to end
            if((currLineWordCnt === 1) || isLastWord) {
                res.push(currLine.join('').trim().padEnd(maxWidth, ' '));
            } else { // divide among words
                let perDiv = Math.floor(spacesToAdd / (currLineWordCnt - 1)) + 1;
                let perDivRe = spacesToAdd % (currLineWordCnt - 1);
                currLine.forEach((c, j) => {
                    let re = perDivRe > 0 ? 1 : 0;
                    if(Math.abs(j % 2) == 1) { // if odd
                        currLine[j] = currLine[j].padEnd((perDiv+re), ' ');
                        perDivRe--;
                    }
                })
                res.push(currLine.join(''));
            }
            // reset tracker vars
            currLine = [], currLineLen = 0, currLineWordCnt = 0;
        }
    });
    return res;
};


console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
// [
//     "This    is    an",
//     "example  of text",
//     "justification.  "
// ]

console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));
// [
//     "What   must   be",
//     "acknowledgment  ",
//     "shall be        "
// ]

console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do", "nice"], 20));
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ] 

console.log(fullJustify(["ask","not","what","your","country","can","do","for","you","ask","what","you","can","do","for","your","country"], 16));
// [
//   'ask   not   what',
//   'your country can',
//   'do  for  you ask',
//   'what  you can do',
//   'for your country'
// ]