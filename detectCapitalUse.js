var detectCapitalUse = function (word) {
  let capitals = 0;
  for (let i = 0; i <= word.length; i++) {
    if (word[i] >= "A" && word[i] <= "Z") {
      capitals++;
    }
  }
  if (capitals === word.length) {
    return true;
  } else if (capitals === 0) {
    return true;
  } else if (capitals === 1 && word[0] >= "A" && word[0] <= "Z") {
    return true;
  } else {
    return false;
  }
};
