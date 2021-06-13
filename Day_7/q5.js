const cylinder = {
    pi: Math.PI,
    radius: 10,
    height: 10,
    volume: function(){
        return (this.pi * Math.pow(this.radius, 2) * this.height);
    }
}

var vol = parseFloat( cylinder.volume().toFixed(4) );

console.log(vol);