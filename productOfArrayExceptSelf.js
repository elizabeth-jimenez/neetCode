function productExceptSelfOrig(nums) {
    const numsProduct = nums.reduce((n, m) => n*m);
    const returnArr = [];
    nums.forEach((a, i) => {
        if(a === 0) {
            let numsProductForZero = [...nums];
            numsProductForZero.splice(i, 1);
            numsProductForZero = numsProductForZero.reduce((n, m) => n*m);
            returnArr.push(numsProductForZero);
        } else {
            returnArr.push(numsProduct / a);
        }
        
    })
    return returnArr;
}

// after reading explanation solution
function productExceptSelf(nums) {
    let result = [1];
    let postfix = 1;

    //generate prefixes
    for(let i = 0; i < nums.length - 1; i++) {
        result.push(result[i]*nums[i]);
    }

    //calculate postfix and populate result
    for(let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * postfix
        postfix *= nums[i];
    }

    return result;
}

console.log(productExceptSelf([1, 2, 0, 4]));