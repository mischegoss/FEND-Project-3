'use strict'

let enemySpeed = 100; // This is stored in a variable to allow easy devlopment of different levels
class Enemy { // Reconfigured starter code
  constructor(x,y,speed)  {
    this.sprite = 'images/enemy-bug.png';
    this.y = y;
    this.x = x;
    this.speed = Math.random() * 200 + enemySpeed;
  }
};

Enemy.prototype.update = function (dt) {
  this.x += this.speed * dt;
  if (this.x > 500) {
    this.x = -100;
  }

};
// This is the provided Enemy render
Enemy.prototype.render = function() {
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

class Player {
  constructor() {
    this.x = 200;// Sets starting position
    this.y = 380;//to bottom middle of screen
    this.sprite = 'images/char-horn-girl.png'; // Sets the Sprite image
    this.step = 101; // This sets how big the step is so moves one block
    this.jump = 85;// at a time.
  }
//This is just using the same method as the provided Enemy method above
 render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 }
 update(dt) {

 }
 // This moves the Player. Method based on Matthew Cranford's tutorial. Replaces 'if else' method.
handleInput (input) {
  switch (input) {
     case 'left':
         if (this.x > 0) {
             this.x -= this.step;
         }
         break;
     case 'up':
         if (this.y > this.jump - 75) { // This adds a bit of padding so the player makes it to the top grass.
             this.y -= this.jump;
         }
         break;
     case 'right':
         if (this.x < this.step * 3) {
             this.x += this.step;
         }
         break;
     case 'down':
         if (this.y < this.jump * 4) {
             this.y += this.jump;
             break;
         }
 }
    }

};


const enemy = new Enemy();
// array makes multiple enemies
const allEnemies = [new Enemy(-200, 65), new Enemy(-150, 145), new Enemy(-100, 230), new Enemy(-50, 310)];
const player = new Player();

// This is the provided Event Listener
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
