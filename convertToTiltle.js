function convertToTitle(columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    columnNumber--; // Decrement to make it 0-based
    const charCode = (columnNumber % 26) + 65; // 65 is 'A'
    result = String.fromCharCode(charCode) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
}
console.log(convertToTitle(28)); 