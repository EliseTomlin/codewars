// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function findAverage(array){
    if(array.length ===0){
        return 0
    }

    let sum = 0
    for(let i = 0; i<array.length; i++){
        sum += array[i]
    }
    return sum / array.length
}

//other answers

var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }

  //==================================

  function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}

//=================================
const find_average = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;