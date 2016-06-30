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
      
    for (var i = 0; i < syllableArray.length; i++) {
      if(phoneme != undefined){
        if(phoneme.match(/\d/)){
          if(phoneme.match(/\d/g).length === i){
            syllableArray[i].push(word);
          }
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