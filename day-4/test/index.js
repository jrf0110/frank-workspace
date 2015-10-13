var TransposableList = require('../js/transposable-list');

var colorList = TransposableList([
'blue', 'red', 'green', 'yellow'
	]);

console.log(colorList.list);
console.log(colorList.transposeLeft().list);
console.log(colorList.transposeLeft().list);
console.log(colorList.transposeRight().list);
console.log(colorList.transposeRight().list);
