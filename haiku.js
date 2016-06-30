var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

var syllableArray = [0,[],[],[],[],[],[],[]];

function formatData(data){    
   var lines = data.toString().split("\n"),
       lineSplit
   
   lines.forEach(function(line){    
    lineSplit = line.split("  ");
    var word = lineSplit[0];
    var phoneme = lineSplit[1];    
    
    if(phoneme != undefined){
    	if(phoneme.match(/\d/)){
    		if(phoneme.match(/\d/g).length === 1){
    			syllableArray[1].push(word);
    		}
    		if(phoneme.match(/\d/g).length === 2){
    			syllableArray[2].push(word);
    		}
    		if(phoneme.match(/\d/g).length === 3){
    			syllableArray[3].push(word);
    		}
    		if(phoneme.match(/\d/g).length === 4){
    			syllableArray[4].push(word);
    		}
    		if(phoneme.match(/\d/g).length === 5){
    			syllableArray[5].push(word);
    		}
    		if(phoneme.match(/\d/g).length === 6){
    			syllableArray[6].push(word);
    		}
    		if(phoneme.match(/\d/g).length === 7){
    			syllableArray[7].push(word);
    		}
    	}
	}	
  	});   
}

formatData(cmudictFile);

exports.createHaiku = function(struct, data){
	var possibleWords;
  return struct.map(function(noLines){
    return noLines.map(function(noSyllables){
      possibleWords = data[noSyllables];
      return possibleWords[Math.floor(Math.random() * possibleWords.length)];
    }).join(' ');
  }).join('\n');
}

exports.syllableArray = syllableArray;