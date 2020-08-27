class Player {
  constructor(game) {
  this.jumping;
  this.height = 100;
  this.width = 40;
  this.x = 200;
  this.y = height - this.height;
  this.gravity = 0.2;
  this.velocity = 0;
  this.game = null;
  this.canJump = true;
  this.playing = false;
  this.score = 0;
  this.angle = 0.2
  this.history = []
  this.vector = createVector(this.x, this.y);
  this.polySynth = new p5.PolySynth();
  }

  setGame(game) {
    this.game = game;
    if(this.score > 7) {
      fill(random(100, 255),random(100, 255),random(100, 255))
      // let time = 0;
    //   this.polySynth.play("C4",0.1, time +=1/2, 2.5)
    //   this.polySynth.play("E4",0.1, time += 3/4, 1.5)
    // this.polySynth.play("G4",0.1, time += 0.5, 3/4)
    // this.polySynth.play("B5",0.1, time += 0.25, 1)
    }
  }
  // show() {

  //   this.height = this.side + (this.y - this.headY);
  //   push();
  //   translate(
  //     this.x + (random(1) < 0.9) + (1 / 2) * this.width,
  //     this.y + (random(1) < 0.9) + (1 / 2) * this.side
  //   );
  //   rotate((PI / 20) * (frameCount));
  //   rectMode(CENTER);
  //   rect(this.x, this.y, this.width, this.width)
  //   pop();

  // }

  drawPlayer() {

    
    square(this.x, this.y, this.width)
    // this.history.push(this.vector)
    // if (this.history.length > 25) {
    //     this.history.splice(0,1);
    // }
    // console.log(this.x);
  //   push()
  //   for (let i = 0; i < this.history.length; i++) {
  //     fill(random(255))
  //     square(this.x, this.y, this.width)
  // }
  //   pop();
    
    if (keyIsDown(39)) {
      this.x += 5
    } else if (keyIsDown(37)){
      this.x -= 5;
    } 
    if (this.y == height - this.height){
        this.canJump = true;
        }
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y >= height - this.height) {
      this.y = height - this.height;
    }
  }

  jump (){
    this.playing = true;
      this.canJump = false;
      this.velocity = -7;
  }
  
}
