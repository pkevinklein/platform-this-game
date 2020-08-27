class PowerUp {
    constructor(circle) {
        this.height = 50;
        this.width = 50;
        this.cirle = circle
        this.collectables = [];
        this.x = (Math.random() * width);
        this.y = height - this.height;
        this.platform;
        this.game = new Game();
        this.particle = new Particle (this.x,this.y);
        this.player = new Player()
        this.sound
    }

    drawUpgrade() {
        this.y -= 3
        this.obstacle = new Obstacle()
        ellipse(this.x, this.y, 15, 15)
      }
    upgradeCollision(playerInfo) {
        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y + playerInfo.height / 2
        if (dist(this.x,this.y,playerX,playerY) > 35) {
          return false;
        } else {
          let notes = ["C6","D6","E6","F6","G6","A6","B6","C7"]
          let randomNote = notes[Math.floor(Math.random()* notes.length)]
          this.game.sound.play(randomNote)
            playerInfo.score++;
          return true;
        }
      }
}