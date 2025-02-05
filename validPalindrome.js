function isPalindrome(s) {
   
    let cleanedStr = "";
    for (let char of s) {
        if (/[a-zA-Z0-9]/.test(char)) {
            cleanedStr += char.toLowerCase();
        }
    }
    return cleanedStr === cleanedStr.split("").reverse().join("");
}


console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car")); 
