// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//mysolution

const reverseSeq = n =>{
    let results =[]
    for(let i =n; i>=1; i--){
        results.push(i)
    }return results
}

//other answers

const reverseSeq = num => {
    return new Array(num)
        .fill()
        .map((d, i) => i + 1)
        .reverse()
  };