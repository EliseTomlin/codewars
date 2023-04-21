// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).


//mysolution
function cockroachSpeed(s) {
    let conversion = s*27.7778
    let speed = Math.floor(conversion)
      return speed
    }


//other solutions

const cockroachSpeed = s => Math.floor(s / 0.036);

//==============================

function cockroachSpeed(s) {
    //multiply km/m by 27.7777777778
    return Math.floor(s*27.7777777778);
  }

  //=============================

  function cockroachSpeed(s) {
    return Math.floor(s*100000/3600);
  }