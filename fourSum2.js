function fourSum2(nums1, nums2, nums3, nums4) {
    let res = 0;
    let oneAndTwoAdditions = {};

    //loop through and sum all in nums1 and nums2
    nums1.forEach(n1 => {
        nums2.forEach(n2 => {
            oneAndTwoAdditions[n1+n2] ??= 0;
            oneAndTwoAdditions[n1+n2]++;
        });
    });

    //loop through all in nums3 and nums4 and see if negation of sum is in map 
    nums3.forEach(n3 => {
        nums4.forEach(n4 => {
            let negationSum = (n3 + n4) * -1;
            res += oneAndTwoAdditions[negationSum] ?? 0;
        });
    });
    console.log(res);
    return res;
}
// let nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]; // 1
let nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]; //2
fourSum2(nums1, nums2, nums3, nums4);