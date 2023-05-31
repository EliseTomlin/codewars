// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//my solution
 function digitize(n){
    let array = n.toString().split('').reverse()
    return array.map(Number)
 }

 //other ans
 function digitize(n) {
    return Array.from(String(n), Number).reverse();
  }