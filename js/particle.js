class Particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.history = [];
        this.vector
        this.game 
        // console.log(this.player.x)
    }
    update(){
        // this.x += random(-5,10);
        // this.y += random(-5,10);

        // if(this.y > height){
        //     this.y = height
        // }
        
    }
    
    whereIsPlayer(player) {
        this.vector = createVector(player.x, player.y)
        this.history.push(this.vector)
        if (this.history.length > 25) {
            this.history.splice(0,1);
        }
    }

    drawParticles() {
        push()
        // stroke(0)
        // fill(random(255), random(255), random(25))
        // ellipse(this.x,this.y, 24, 24)
        for (let i = 0; i < this.history.length; i++) {
            let position = this.history[i];
            fill(random(150,250))
            rect(position.x, position.y, 15+i,15+i)
        }
        pop()
    }
}