// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//my solution

var countSheep = function (num){
    let results = ''
    for(let i = 1; i<=num; i++){
        results += i + ' sheep...'
    }return results
}

//other answers

var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
  }