// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 

//my solutions

function mostLikely(prob1, prob2) {
    const [num1, denom1] = prob1.split(':').map(Number);
    const [num2, denom2] = prob2.split(':').map(Number);
  
    const ratio1 = num1 / denom1;
    const ratio2 = num2 / denom2;
  
    return ratio1 > ratio2;
  }

  //other answers

  const divide = (a, b) => a / b;
const mostLikely = (p1, p2) => divide(...p1.split(':')) > divide(...p2.split(':'));

//===========================

function mostLikely(p1,p2){
    p1 = p1.split(':');
    p2 = p2.split(':');
  
    p1 = p1[0]/p1[1];
    p2 = p2[0]/p2[1];
    
    return (p1 > p2);
  }
//====================================================
function mostLikely(prob1,prob2){
    let [a, b] = prob1.split(':');
    let [c, d] = prob2.split(':');
    
    return a/b > c/d;
  }  