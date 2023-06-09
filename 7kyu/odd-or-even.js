// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

//mysolution

function oddOrEven(array) {
    let sum =  array.reduce((acc, c)=>acc +c, 0)
    if(sum % 2===0){
      return 'even'
    }else{
      return 'odd'
    }
    }

    //other answers
    function oddOrEven(arr) {
        return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
      }

      //========================================

      const oddOrEven = a => a.reduce((s,n)=> s + n,0)%2 == 0 ? "even" : "odd";
