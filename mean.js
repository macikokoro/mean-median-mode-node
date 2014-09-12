//Mean=============================
var numArray = [1, 2, 3];

var findMean = function (numArray) {
  var sum = 0;
  for (var i = 0; i < numArray.length; i++) {
      sum += numArray[i];
  }
  return (sum / numArray.length);
};

console.log(findMean(numArray));
