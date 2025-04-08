var subtractProductAndSum = function(n) {

    let sum=0;
    let product=1
    let result=0;

while(n>0){
    let digit=n%10;
    sum=(sum+digit)
    product=(product*digit)
    n=Math.floor(n/10)
   }  
  result=(product-sum )

  return result 
};

console.log(subtractProductAndSum(234))