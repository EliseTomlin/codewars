// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.




//my solution
function booleanToString(b){
    if(b == true){
      return 'true'
    }else{
      return 'false'
    }
    }


    //other answers

    function booleanToString(b){
        return b.toString();
      }

      //=====================================
      function booleanToString(b){
        return b ? 'true' : 'false';
      }