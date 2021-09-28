const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Game() {
  this.towers = [[1,2,3],[],[]];
}

Game.prototype.promptMove = function(callback) {
  this.print();

  reader.question("Move from where?", function (answer) {
    let from = answer;
    reader.question("Move to?", function (answer) {
      let to = answer;

      callback(from, to);
    });
  });
}

Game.prototype.print = function() {
  console.log(JSON.stringify(this.towers));
}

const game = new Game();

const isValidMove = function(from, to) {
  if (game.towers[from].length === 0) {
    return false;
  }
  if (game.towers[to].length === 0) {
    return true;
  }
  if (game.towers[from][0] > game.towers[to][0]) {
    return false;
  }
  return true
}

const move = function(from, to) {
  if (!isValidMove(from, to)) {
    console.log("move failed")
    return false;
  }
  let disc = game.towers[from].shift();
  game.towers[to].unshift(disc);

  if (!isWon()) {
    game.run();
  }
  return true;
}

const isWon = function() {
  let winnerA = [[],[],[1,2,3]];
  let winnerB = [[],[1,2,3],[]];

  let winningA = true;
  let winningB = true;
  game.towers.forEach( function(tower, tower_idx) {
    if (tower.length !== winnerA[tower_idx].length || !tower.every( function(val, index) {
      return val === winnerA[tower_idx][index]
    })) {
      winningA = false;
    }
  });

  game.towers.forEach( function(tower, tower_idx) {
    if (tower.length !== winnerB[tower_idx].length || !tower.every( function(val, index) {
      return val === winnerB[tower_idx][index]
    })) {
      winningB = false;
    }
  });

  return (winningA || winningB)
}

Game.prototype.run = function(callback) {
  let move_result = this.promptMove(move)
  // if (isWon()) {
  //   callback();
  // } else {
  //   this.run();
  // }
}

game.run(function() {
  console.log("you won");
  reader.close();
});
