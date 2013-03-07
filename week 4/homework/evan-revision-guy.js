function Guy (x, y, scale) {

    // each guy has a given position and scale
    this.x = x
    this.y = y
    this.scale = scale

    // randomize it's properties
    this.beard = "rgba("+54+","+31+","+0+","+Math.random()+")"
    this.hat = "rgb(" + randomInt(100,200) + "," + randomInt(100,200) + "," + randomInt(100,200) + ")"

    // more random stuff ...
    // ...
    // ...

    // each guy has his own droplet
    this.droplet = new Droplet(this.x + 74, this.y + 117, 3, '#ff6666')

    // start interval for droplets
    var guy = this // this is important: inside the anonymous function below, 'this' would point to global
    setInterval(function () {
        guy.droplet = new Droplet(this.x + 74, this.y + 117, 3, '#ff6666')
    }, 3000)

}

Guy.prototype = {

    draw: function () {

        // set the scale!
        ctx.save()
        ctx.scale(this.scale, this.scale)

        // draw all the stuff
        // don't forget to use this.x and this.y
        ctx.fillStyle=skin
        ctx.fillRect(this.x + 50, this.y+280, 30, 444)

        // draw more stuf ...
        // ...
        // ...

        // draw the droplet as well
        this.droplet.update()
        this.droplet.draw()

        // don't forget to restore
        ctx.restore()

    }

}

// hold all the guys
var guys = []

// every 5 sec we create a new guy
setInterval(function () {
    var guy = new Guy(randomX, randomY, randomScale)
    guys.push(guy)
}, 5000)

// start animation
animate()
function animate () {
    requestAnimationFrame(animate)
    
    // clear the canvas
    ctx.clearRect(0, 0,window.innerWidth,window.innerHeight)

    for (var i = 0; i < guys.length; i++) {
        guys[i].draw()
    }
    
    // your floor should be all the same now
    ctx.fillStyle=floor
    ctx.fillRect(0,741,width,10000)
}