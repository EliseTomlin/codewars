// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//mysolution

function isPangram(string) {
  let pangram = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < pangram.length; i++) {
    if (string.toLowerCase().indexOf(pangram.charAt(i)) === -1) {
      return false;
    }
  }
  return true;
}

//otheranswers

function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

//=========================================================

function isPangram(string) {
  const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];

  return alphabetList.every((letter) => string.toLowerCase().includes(letter));
}

//===========================================================

function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

//==============================================================

function isPangram(str){
 var alphabet = ['a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
      ];
      str=str.toLowerCase();
      for (var i = 0; i < alphabet.length; i++) {
          if (str.indexOf(alphabet[i])<0) {
            return false;
          }
      }
      return true
}