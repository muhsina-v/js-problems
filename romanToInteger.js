function romanToInt(s) {
    const map={
    "I"  :  1,
    "V"  :  5,
    "X"  :  10,
    "L"  :  50,
    "C"  :  100,
    "D"  : 500,
    "M"  : 1000
    }
    let total=0;
    for(let i=0;i<s.length;i++){
          let first=map[s[i]];
          let sec=map[s[i+1]] || 0;

          if(first>=sec){
            total+=first;
          }else{
            total-=first;
          }
    }
    return total;
}
console.log(romanToInt("IV"));