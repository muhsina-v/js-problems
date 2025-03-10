var averageValue = function(nums) {
    let div=0;
   let count=0;
 
     for(a of nums){
        if(a%2===0 && a%3==0){
         div+=a
         count++
        }
       
         } 
         if(count===0) return 0;

           let ans=Math.floor(div/count)
         return ans
 }; 
 console.log(averageValue([1,3,6,10,12,15]))