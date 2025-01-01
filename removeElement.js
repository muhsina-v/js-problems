const ar=[3,2,2,3];
let val=3;

function removeElement(ar,val){
    let count=0;
    for(let i=0;i<ar.length;i++){
        if(ar[i]!==val){
            ar[count]=ar[i];
            count++;
        }
    }
        return count;
    }

let k=(removeElement(ar,val));
console.log(k);
console.log(ar.slice(0,k));




