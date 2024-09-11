function encode(strs) {
    // encode grabbed from provided Solution
    let result = '';

    strs.forEach(str => {
        result += `${str.length}#${str}`;
    })

    return result;
}

function decode(hash) {
    let result = [];
    let hashArr = hash.split('');

    for(let i = 0; i < hashArr.length - 1;) {
        const start = i + 2;
        const end = start + Number.parseInt(hashArr[i]);
        result.push(hashArr.slice(start, end).join(''));
        i = end;
    }

    return result;
}

const input1 = encode(["neet","code","love","you"]);
console.log(decode(input1));

const input2 = encode(["we","say",":","yes"]);
console.log(decode(input2));

