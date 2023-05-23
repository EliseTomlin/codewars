// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"


//mysolution
function freqSeq(str, sep) {
    const charCounts = {};
  
    Array.from(str).forEach((char) => {
      charCounts[char] = (charCounts[char] || 0) + 1;
    });
  
    const translatedChars = [];
  
    Array.from(str).forEach((char) => {
      const count = charCounts[char];
      translatedChars.push(count);
    });
  
    const output = translatedChars.join(sep);
  
    return output;
  }

  
  //other answers

  function freqSeq(str, sep) {
    let letters = str.split("");
    var count = letters.reduce(function(acc, l) {
      acc[l] = acc[l] ? acc[l] + 1 : 1;
      return acc;
    }, {});
    return letters.map(l => count[l]).join(sep);
  }

  //=====================================================

  const freqSeq = (s, sep) => s.split("").map(i => s.split(i).length - 1).join(sep)

  //=======================================================

  function freqSeq(str, sep) {
    let toArr = str.split('')
    let result = toArr.map(el => toArr.filter(f => f == el).length);

    return result.join(sep);
}