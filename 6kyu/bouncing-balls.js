// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

//mysolution
function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
      return -1; 
    }
  
    let count = 1; 
  
    while (h * bounce > window) {
      h *= bounce;
      count += 2; 
    }
  
    return count;
  }

  //otheranswers
  function bouncingBall(h,  bounce,  window) {
    var rebounds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    return rebounds;
  }
  //============================================

  const bouncingBall = (h, b, w) => (h <= 0 || b <= 0 || b >= 1 || w >= h) ? -1 : 2 + bouncingBall(h*b, b, w);