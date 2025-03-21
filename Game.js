let Game=function(nums){
    nums.sort((a, b) => a - b);
  let ar=[]
  
  while (nums.length > 0){
    let ali=nums.shift()
    let bob=nums.shift()

    ar.push(bob)
    ar.push(ali)
  }
  return ar;

   

}
let nums = [5, 4, 2, 3]
console.log(Game(nums));
