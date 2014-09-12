//Find mode final version
var numArray = [1, 2, 3, 4, 4, 5, 5, 5];

var findMode = function (numArray) {
  var counter = [];
  var mode = [];
  var max = 0;
    for (var i in numArray) {
      if (counter[numArray[i]] === undefined)
          counter[numArray[i]] = 0;
          counter[numArray[i]]++;

      if (counter[numArray[i]] == max) {
          mode.push(numArray[i]);
      }
      if (counter[numArray[i]] > max) {
          max = counter[numArray[i]];
          mode = [numArray[i]];
      }
    }
	return mode;
}

findMode(numArray);

console.log(findMode(numArray));
