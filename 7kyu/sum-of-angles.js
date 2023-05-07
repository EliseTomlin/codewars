// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

//mysolutions
function angle(n) {
    return (n-2)*180 .//this is the formula that calculates the sum of the internal anglesw inside a shape(polygon)
    }

    //other answer
    let angle = n => n * 180 - 360;
