var numArray = [1, 2, 3, 4, 5];

numArray.sort(function(a, b) { return a - b; });

var findMedian = function(numArray) {
  var middle = Math.floor(numArray.length / 2);

  if(numArray.length % 2 === 0) {
    return ((numArray[middle - 1] + numArray[middle]) / 2);
  } else {
    return numArray[middle];
  }
};

console.log(findMedian(numArray));
