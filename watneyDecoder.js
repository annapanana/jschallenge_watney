'use strict';
// decode: converts ASCII-Hex to string
function decode(str){
  var decodedMessage = "";
  let strArr = str.split(",");

  // Convert to letters
  for (let i = 0; i < strArr.length; i++) {
    decodedMessage+= String.fromCharCode(parseInt(strArr[i], 16));
  }
  return decodedMessage;
}

function encode(str){
  var encodedMessage = [];
  for (var i = 0; i < str.length; i++) {
    encodedMessage.push(str[i].charCodeAt(0).toString(16));
  }
  return encodedMessage.join(',');
}

// encodeArc: convers a string to the proper degrees of arc to point the camera. The first card is at 0° and they are placed around the circle in a clockwise fashion.
function encodeArc(str) {
  let encodedMessage = encode(str);
  let strArr = encodedMessage.split(",");
  // console.log(strArr);
  // let rotationSets = [];
  let rotations = "";
  var rotationTable = {
    "0": 0,
    "1": 22.5,
    "2": 45,
    "3": 67.5,
    "4": 90,
    "5": 112.5,
    "6": 135,
    "7": 157.5,
    "8": 180,
    "9": 202.5,
    "a": 225,
    "b": 247.5,
    "c": 270,
    "d": 292.5,
    "e": 315,
    "f": 337.5,
  };

  for (var i = 0; i < strArr.length; i++) {
    rotations+=rotationTable[strArr[i][0]] + ",";
    rotations+=rotationTable[strArr[i][1]];
    if (i !== strArr.length-1) {
      rotations+=",";
    }
  }
  return rotations;
}


// console.log("Encoded: ", encode("I am stuck on Mars"));
// console.log("Decoded: ",decode(encode("I am stuck on Mars")));
// console.log("Arc: ", encodeArc(encode("I am stuck on Mars")));
// console.log(encode("I am stuck on Mars."));;

module.exports = {decode,encode,encodeArc}
