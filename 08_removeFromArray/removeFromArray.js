const removeFromArray = function (arr, ...removeList) {
  return arr.filter((item) => !removeList.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
