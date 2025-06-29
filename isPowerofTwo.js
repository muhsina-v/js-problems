var isPowerOfTwo = function(n) {
   
  if (n <= 0) return false;

  while (n % 2 === 0) {
    n = n / 2;
  }

  return n === 1;
};
console.log(isPowerOfTwo(0));   // false
console.log(isPowerOfTwo(1024));