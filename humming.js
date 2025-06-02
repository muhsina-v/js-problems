var hammingWeight = function(n) {
 
  let count = 0;
  while (n !== 0) {
    count += n & 1; 
    n >>>= 1;      
  }
  return count;
}


console.log("Input: 11 => Output:", hammingWeight(11));      
