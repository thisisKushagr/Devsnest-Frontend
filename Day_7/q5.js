const cylinder = {
    pi: Math.PI,
    radius: 1.0,
    height: 7.0
}

var vol = parseFloat( (cylinder.pi * Math.pow(cylinder.radius, 2) * cylinder.height).toFixed(4) );

console.log(vol);