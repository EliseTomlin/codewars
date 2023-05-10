// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
//mysolution (chatgpt)
function towerBuilder(nFloors) {
    const tower = [];
  
    for (let i = 1; i <= nFloors; i++) {
      const spaces = ' '.repeat(nFloors - i);
      const stars = '*'.repeat(2 * i - 1);
      const floor = spaces + stars + spaces;
      tower.push(floor);
    }
  
    return tower;
  }

  //other answers

  function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }

  //==================================================

  function towerBuilder(nFloors) {
    // build here
    let space,star, tower = [];
    for(i = 1; i <= nFloors; i++){
      space = " ".repeat(nFloors - i);
      star  = "*".repeat((2*i) - 1);
      tower.push(`${space}${star}${space}`);
    }
    return tower
  }