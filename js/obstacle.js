class Obstacle {
  constructor(img) {
    this.height = 50;
    this.width = 50;
    this.x = (Math.random() * width) / 1.5;
    this.y = height - this.height;
    this.platform;
  }
  // upgradeCollision(playerInfo) {
  //   let playerX = playerInfo.x + playerInfo.width / 2
  //   let playerY = playerInfo.y + playerInfo.height / 2
  //   console.log(dist(this.x, this.y * 1.5, playerX, playerY));
  //   if (dist(this.x, this.y * 1.5, playerX, playerY) > 40) {
  //     console.log("upgrade collision");
  //     return false;
  //   } else {

  //     return true;
  //   }
  // }
  platformCollision(playerInfo) {
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;
    let playerX = playerInfo.x + playerInfo.width / 2
    let playerY = playerInfo.y + playerInfo.height / 2
    if (dist(obstacleX,obstacleY,playerX,playerY) > 30 && dist(obstacleX + this.width,obstacleY,playerX,playerY) > 40) {
      return false;
    } else {
      return true;
    }
  }
  drawObstacle() {
    this.y -= 2
    rect(this.x,this.y,100,10)
  }

  
  drawTriangles() {
    let trianglesDown = [];
    let trianglesUp = [];
    for (let i = 0; i < width; i += 50){
      trianglesUp.push(triangle(i, 0, i+20, 40, i+40, 0));
    }
    for (let i = 0; i < width; i += 50){
      trianglesDown.push(triangle(i, height, i+20, height-55, i+40, width));
    }
    return [trianglesDown, trianglesUp];
  }
  
}
