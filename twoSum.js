function twoSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return [i,j];
            }
        }
    }
}
const arr=[3,2,4];
let target=6;
console.log(twoSum(arr,target));