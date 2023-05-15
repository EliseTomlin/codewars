// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests


//mysolution

function validateHello(greetings) {
    // array of greetings in different languages
    const helloArray = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
    const lowerCaseGreetings = greetings.toLowerCase();
    
    for (let i = 0; i < helloArray.length; i++) {
      if (lowerCaseGreetings.includes(helloArray[i])) {
        return true;
      }
    }
      return false;
  }

  //other ans
  function validateHello(greetings) {
    return /(ahoj|ciao|czesc|h[ae]llo|hola|salut)/i.test(greetings)
  }
  //==================================
  const hellos = {
    hello: 'english',
    ciao: 'italian',
    salut: 'french',
    hallo: 'german',
    hola: 'spanish',
    ahoj: 'czech republic',
    czesc: 'polish',
    }
    
    const validateHello = greetings => {
      for (key in hellos) {
       if (greetings.toLowerCase().includes(key)) {
         return true
       }
      }
      return false
    }