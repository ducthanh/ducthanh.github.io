var numberArray = [1,2,3,4,5,6,7, 8, 9, 10];
console.log("Number Array: ", numberArray);


// var filteredNumberArray = numberArray.filter( function (value) {
// 	return value > 5;
// });

function filter5above(value) {
	return value > 5;
}

numberArray.filter(filter5above);


console.log(filteredNumberArray);



var parent = {
	value: "ParentValue",
	obj: {
		objValue: "parentObjValue"
	},
	walk: function() {
		console.log("walking!");
	}
}

var child = Object.create(parent);

console.log(child.value);
console.log(child.obj.objValue);

console.log(parent.value);
console.log(parent.obj.objValue);
console.log(parent);
console.log("child", child);