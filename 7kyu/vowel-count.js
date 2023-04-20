// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//mysolution

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelCount++;
      }
    }
    return vowelCount;
  }


  //other solutions

  function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelsCount = 0;
    
    // enter your majic here
    for (let i of str) {
      if (vowels.includes(i)) vowelsCount++;
    }
    
    return vowelsCount;
  }

  //==================================


  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }




  //============================================

  function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }