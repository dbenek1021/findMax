// JavaScript source code

var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6]; {
	//console.log(Math.max(17, 42, 3, 5, 9, 10, 28, 7, 6));
}

function findMax(testArray) {
	//console.log(Math.max.apply(null, testArray));
	var number = 0;
	var secondnumber = 0;
	for (var i = 0; i < testArray.length; i++) {
		if (i === 0) {
			number = testArray[i];
		} else {
			secondnumber = testArray[i];
			if (number < secondnumber) {
				number = secondnumber;
			} else {
				continue;
			}

		}

	};
	console.log(number);
};

function showMax() {
	var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
	findMax(testArray);
};