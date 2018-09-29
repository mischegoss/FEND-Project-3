
var Enemy = function (x, y) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
};
//First Commit

Enemy.prototype.update = function (dt) {
  this.x += 1;
  if (this.x > 500) {
    this.x = -100;
  }
};

Enemy.prototype.render = function() {
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function() {
 this.x = 200;
 this.y = 350;
 this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function(dt) {
};
Player.prototype.render = function() {
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var allEnemies = [new Enemy(-200, 65), new Enemy(-150, 145), new Enemy(-100, 230)];
var player = new Player();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
