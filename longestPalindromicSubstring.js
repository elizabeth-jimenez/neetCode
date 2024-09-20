function longestPalindrome(str) {
    let longestP = '';

    str.split('').forEach((s, i) => {
        // for odd len palindrome
        let l = i, r = i, templP = [];
        while(l >= 0 && r < str.length && (str[l] === str[r])) {

            if(l === r){
                templP.push(str[r]);
            } else {
                templP.unshift(str[l]);
                templP.push(str[r]);
            }
            l--;
            r++;
        }
        if(templP.length > longestP.length) {
            longestP = templP.join('');
        }

        // for even len palindrome
        l = i, r = i + 1, templP = [];
        while(l >= 0 && r < str.length && (str[l] === str[r])) {
            templP.unshift(str[l]);
            templP.push(str[r]);
            l--;
            r++;
        }

        if(templP.length > longestP.length) {
            longestP = templP.join('');
        }
    });
    return longestP;
}

console.log(longestPalindrome('ababd')); // bab
console.log(longestPalindrome('abbc')); // bb