// Create a method to see whether the string is ALL CAPS.

//mysolution
String.prototype.isUpperCase = function() {
  for (let i = 0; i < this.length; i++) {
    if (/[a-z]/.test(this.charAt(i))) {
      return false;
    }
  }
  return true;
};

//other answers
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}
