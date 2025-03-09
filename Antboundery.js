function ant(nums){
   let pos=0;
   let count=0;

   for(move of nums){
    pos+=move;
    if(pos===0){
        count++;
    }
   }
   return count;
}
//console.log(ant([2,3,-5]));
console.log(ant([2434,44,-4244]));
