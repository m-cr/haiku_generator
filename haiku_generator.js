var haiku = require('./haiku');

var structure = function(){
	var strucArr = [[],[],[]];
	strucArr[0].push(Math.floor(Math.random()*5));
	if(strucArr[0][0] < 5){strucArr[0][1] = 5 - strucArr[0][0]};
	strucArr[1].push(Math.floor(Math.random()*5));
	if(strucArr[1][0] < 7){strucArr[1][1] = 7 - strucArr[1][0]};
	strucArr[2].push(Math.floor(Math.random()*5));
	if(strucArr[2][0] < 5){strucArr[2][1] = 5 - strucArr[2][0]};
	return strucArr;
}

haikuStructure = structure();

// console.log(structure())

console.log( haiku.createHaiku( haikuStructure, haiku.syllableArray) );