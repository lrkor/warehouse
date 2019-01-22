exports.fieldMap = function (arr, keyMap) {
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    for (let key in obj) {
      let newKey = keyMap[key];
      if (newKey) {
        obj[newKey] = obj[key];
        delete obj[key];
      }
    }
  }
  return arr;
};
