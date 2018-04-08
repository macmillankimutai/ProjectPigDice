function Player(name) {
  this.name = name;
  this.turnRunningScore = 0;
  this.totalBankedScore;
  this.lastRoll;
  this.currentTurnArray = [];
}

var playerOne = new Player("Player One");
var playerTwo = new Player("Player Two");
console.log(playerOne, playerTwo);

function Dice(sides) {
  this.sides = sides || 6;
}

Dice.prototype.roll = function() {
  var roll = Math.floor((Math.random() *this.sides ) + 1);
  if (roll === 1) {
    alert("Yoh");
  }
  return roll;
}

Player.prototype.addRollToArray = function(x) {
  this.currentTurnArray.push(x)
}

Player.prototype.sumOfRolls = function() {
  console.log(this.currentTurnArray);
  this.turnRunningScore = this.turnRunningScore + this.currentTurnArray[0];
  this.currentTurnArray.forEach(function(num) {
  });
}

var sixSidedDice = new Dice ();


$(function() {
  $("#player-one-roll").click(function(event) {
    event.preventDefault();
    debugger;
    var sixSidedDiceRoll = SixSidedDice.roll();

  $("#player-one-running").html("<h1 class='running-total'>" + sixSidedDiceRoll + "</h1>");

  console.log(sixSidedDiceRoll);

  playerOne.addRollToArray(sixSidedDiceRoll);
  console.log(playerOne.turnRunningScore +","+ Array.isArray(playerOne.currentTurnArray));
  playerOne.sumOfRolls();

});
});
