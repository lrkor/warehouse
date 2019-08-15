exports.statistical = function (arr) {
  let total=0;
  for(item of arr){
    total = total+item.number;
  }
  return total
};
