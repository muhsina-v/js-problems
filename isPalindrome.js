function isPalindrome(x) {
    let str=x.toString();
    let reversed=str.split('').reverse().join('');
    if(str===reversed){
        return true;
    }else {
        return false;
    }

}
console.log(isPalindrome(121)); 
console.log(isPalindrome(-121));