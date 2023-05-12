

// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

// Lyrics
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.

// ...and so on...

// 3 bottles of beer on the wall, 3 bottles of beer.
// Take one down and pass it around, 2 bottles of beer on the wall.

// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.

// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

// Example
// [ "99 bottles of beer on the wall, 99 bottles of beer.",
//   "Take one down and pass it around, 98 bottles of beer on the wall.",
//   "98 bottles of beer on the wall, 98 bottles of beer.",

//   ...and so on...

//   "3 bottles of beer on the wall, 3 bottles of beer.",
//   "Take one down and pass it around, 2 bottles of beer on the wall.",
//   "2 bottles of beer on the wall, 2 bottles of beer.",
//   "Take one down and pass it around, 1 bottle of beer on the wall.",
//   "1 bottle of beer on the wall, 1 bottle of beer.",
//   "Take one down and pass it around, no more bottles of beer on the wall.",
//   "No more bottles of beer on the wall, no more bottles of beer.",
//   "Go to the store and buy some more, 99 bottles of beer on the wall.
//my solution
var sing = function beerSong() {
    let lyrics = [];
    for (let i = 99; i > 0; i--) {
      let bottleWord = i === 1 ? "bottle" : "bottles";
      let nextBottleWord = i - 1 === 1 ? "bottle" : "bottles";
      let nextLine = i > 1 ? i - 1 : "no more";
      lyrics.push(i + " " + bottleWord + " of beer on the wall, " + i + " " + bottleWord + " of beer.");
      lyrics.push("Take one down and pass it around, " + nextLine + " " + nextBottleWord + " of beer on the wall.");
    }
    lyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
    lyrics.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
    return lyrics;
  }

  //other answers
  var sing = function () {
    var song = [];
    
    for (var i = 99; i > 0; i--){  
      song.push(i + ' ' + (i !== 1 ? 'bottles' : 'bottle') +' of beer on the wall, ' + i +(i !== 1 ? ' bottles' : ' bottle') + ' of beer.');
      song.push('Take one down and pass it around, ' + (i == 2 ? '1 bottle' : i !== 1 ? (i - 1) + ' bottles' : 'no more bottles' ) + ' of beer on the wall.');
    }
    
    song.push('No more bottles of beer on the wall, no more bottles of beer.');
    song.push('Go to the store and buy some more, 99 bottles of beer on the wall.');
    
    return song;
  };


//==================================================
  var sing = function () {
    // The most evil kata so far :)
    var lyrics = [];
    for (var i = 99; i >= 3; i--) {
      lyrics.push(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.');
      lyrics.push('Take one down and pass it around, ' + (i - 1) + ' bottles of beer on the wall.');
    }
    return lyrics.concat([
      '2 bottles of beer on the wall, 2 bottles of beer.',
      'Take one down and pass it around, 1 bottle of beer on the wall.',
      '1 bottle of beer on the wall, 1 bottle of beer.',
      'Take one down and pass it around, no more bottles of beer on the wall.',
      'No more bottles of beer on the wall, no more bottles of beer.',
      'Go to the store and buy some more, 99 bottles of beer on the wall.'
    ]);
  };