function convertToTitle(columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    columnNumber--; 
    const charCode = (columnNumber % 26) + 65;
    result = String.fromCharCode(charCode) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
}
console.log(convertToTitle(28)); 