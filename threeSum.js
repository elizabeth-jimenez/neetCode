function threeSum(nums) {
    nums = nums.sort((a, b) => a-b);
    let res = [];
    
    for(let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i-1] === nums[i]) {
            continue;
        }
        let l = i+1, r = nums.length - 1;
        while(l < r) {
            let sumthree = nums[i] + nums[l] + nums[r];
            if(sumthree === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while(nums[l-1] === nums[l]){
                    l++;
                }
            } else if(sumthree > 0){
                r--;
            } else {
                l++;
            }
        }
    }

    console.log(res);
    return res;
}

threeSum([-1,0,1,2,-1,-4]); // [[-1,-1,2],[-1,0,1]]
threeSum([0,1,1]); // []
threeSum([0,0,0]); // [[0,0,0]]