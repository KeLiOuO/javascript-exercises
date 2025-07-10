const palindromes = function (str) {
  const words = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanStr = str
    .toLowerCase()
    .split("")
    .filter((item) => words.includes(item))
    .join("");

  const reverseStr = cleanStr.split("").reverse().join("");

  return cleanStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
