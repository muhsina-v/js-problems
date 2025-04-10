var differenceOfSum = function(nums) {
    let element=0;
    let digitSum = 0;
   
    for(n of nums){
        element+=n
    }
    
    let digit = nums.join('').split('');

    
    for(d of digit){
        digitSum+=parseInt(d)
    }

    return Math.abs(element-digitSum)
};

console.log(differenceOfSum([1,11,3]));
