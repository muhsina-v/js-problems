var capitalizeTitle = function (title) {
  const words = title.split(" ");

  const updatedWords = words.map((word) => {
    if (word.length <= 2) {
      return word.toLowerCase();
    } else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  return updatedWords.join(" ");
};
console.log(capitalizeTitle("i lOve leetcode"));
