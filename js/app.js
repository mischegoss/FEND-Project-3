let enemySpeed = 200;
class Enemy {
  constructor(x,y,speed)  {
    this.sprite = 'images/enemy-bug.png';
    this.y = y;
    this.x = x;
    this.speed = Math.random() * 200 + enemySpeed;
  }
};
/*var Enemy =
  function (x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.y = y;
    this.x = x;
    this.speed = Math.random() * 200 + enemySpeed;
  };
*/
Enemy.prototype.update = function (dt) {
  this.x += this.speed * dt;
  if (this.x > 500) {
    this.x = -100;
  }

};

Enemy.prototype.render = function() {
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

class Player {
  constructor() {
    this.x = 200;
    this.y = 350;
    this.sprite = 'images/char-boy.png';
  }
 render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 }
 update(dt) {

 }
};
const enemy = new Enemy();
const allEnemies = [new Enemy(-200, 65), new Enemy(-150, 145), new Enemy(-100, 230)];
const player = new Player();


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
