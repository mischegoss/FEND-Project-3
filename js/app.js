//Variables
let enemySpeed = 200; //To make it easier to change enemySpeed if levels are created
let stepSize = 101;
let jumpSize = 85;
let winner = false;

//Reconfigured starter code to use class
class Enemy {
  constructor(x, y, speed) {
    this.sprite = "images/enemy-bug.png";
    this.y = y;
    this.x = x;
    this.speed = Math.random() * enemySpeed / 2 + enemySpeed; //Randomizes the speed of the enemy
  }
  update(dt) {
    //Moves the bugs across the rows
    this.x += this.speed * dt;
    if (this.x > 500) {
      this.x = -100;
    }
    // This is the collision. I aligned the enemies to travel on the same y-axis as the player
    if (
      this.y === player.y &&
      (this.x + stepSize / 2 > player.x && this.x < player.x + stepSize / 2)
    ) {
      player.reset();
    }
  };
  // This was provided in starter code
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
};

class Player {
  constructor() {
    this.x = 200; // Sets starting position
    this.y = -30; // Sets to top of screen so player does not walk backwards up the board
    this.sprite = "images/char-horn-girl.png"; // Sets the Sprite image
    this.step = stepSize; // This sets how big the step is so moves one block
    this.jump = jumpSize; // at a time.
    this.win = false;
  };
  //This is just using the same method as the provided Enemy method above
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  // This moves the Player. Method based on Matthew Cranford's tutorial. Replaces clunkier  'if else' method.
  handleInput(input) {
    switch (input) {
      case "left":
        if (this.x > 0) {
          this.x -= this.step;
          console.log(this.x, this.y);
        }
        break;
      case "up":
        if (this.y > this.jump - 75) {
          this.y -= this.jump;
          console.log(this.x, this.y);
        }
        break;
      case "right":
        if (this.x < this.step * 3) {
          this.x += this.step;
          console.log(this.x, this.y);
        }
        break;
      case "down":
        if (this.y < this.jump * 4) {
          this.y += this.jump;
          console.log(this.x, this.y);
          break;
        }
    }
  };
//when player gets to the other side, win alert triggers
  update() {

    if (this.y === 395) {
      setTimeout(function(){ alert("YOU WON! 🎉🎉🎉🎉🎉🎉"); }, 500);
      this.y = this.y + 1;// This just moves the sprite slightly
      this.x = this.x + 1;// so it doesn't keep alerting
      const smile = document.querySelector(".replay-click"); // Triggers play again
      smile.classList.remove("hide");// function after first game. Allows reset.
    }
  };

  reset() {
    this.x = 200; // Returns player to original position
    this.y = -30;
  }
};

const enemy = new Enemy();
// array makes multiple enemies
const allEnemies = [
  new Enemy(-200, 55),
  new Enemy(-150, 140),
  new Enemy(-100, 225),
  new Enemy(-50, 310)
];

const player = new Player();

// This is the provided Event Listener
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
