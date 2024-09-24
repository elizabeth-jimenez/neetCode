function fourSum(nums, target) {
    nums = nums.sort((a, b) => a-b);
    let res = [];
    
    for(let i = 0; i < nums.length -2; i++){
        if(i > 0 && nums[i-1] === nums[i]){
            continue;
        }

        for(let j = i+1; j < nums.length - 1; j++) {
            if(j > i+1 && nums[j-1] === nums[j]){
                continue;
            }
            let l = j+1, r = nums.length - 1;

            while(l < r) {
                let fourS = nums[i] + nums[j] + nums[l] + nums[r];

                if(fourS === target) {
                    res.push([nums[i], nums[j], nums[l], nums[r]]);
                    l++;
                    r--;
                    while(nums[l-1] === nums[l]) {
                        l++;
                    }
                } else if(fourS < target) {
                    l++;
                    while(nums[l-1] === nums[l]) {
                        l++;
                    }
                } else {
                    r--;
                }
            }
        }
    }
    console.log(res);
    return res;
}

fourSum([1,0,-1,0,-2,2], 0); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
fourSum([2,2,2,2,2], 8); // [[2,2,2,2]]
fourSum([-2,-1,-1,1,1,2,2], 0); // [[-2,-1,1,2],[-1,-1,1,1]]