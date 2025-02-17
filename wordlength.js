function wordlength(s) {
    
    let word=s.trim().split(" "); 

    return word[word.length-1].length; 
}
  
console.log(wordlength("Hello World")); 
  
