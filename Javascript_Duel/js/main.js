/**
 * Fernando L. Aguiar
 * Duel Fight Game - FINISHED
 * Date: 07/20/15
 * PWA - Project Duel 1
 * Assignment 1
*/

/**** Button Use ****/
var button = document.getElementById('btn');
button.addEventListener('click', gameStart, false);

/**** Random Name Assortment to pick random names every match ****/
var names = ['Superman', 'Batman', 'Joker', 'Lex Luthor', 'Green Arrow', 'Deathstroke', 'Wonder Woman', 'Ares', 'Martian Manhunter', 'Lobo', 'Flash', 'Doomsday', 'Green Lantern', 'Sinestro', 'General Zod', 'Batgirl', 'Harley Queen', 'Nightwing', 'Solomon Grundy', 'Catwoman', 'Scorpion', 'Killer Frost', 'Bane', 'Black Adam', 'Cyborg', 'Raven', 'Aquaman', 'Zatana', 'Shazam', 'Hawkgirl'];

/**** Players Object Array ****/
var players = [{Name: names[Math.floor(Math.random() * names.length)],
               Dmg: 20,
               Hp: 100},
               {Name: names[Math.floor(Math.random() * names.length)],
               Dmg: 20,
               Hp: 100}];

/**** Round VAR Declaration ****/
var round = 0;

/**** Display Round ****/
var display = document.getElementById('roundCount');
display.defaultValue = players[0].Name + ' VS ' + players[1].Name;

/**** Show Player name and Health ****/
var p1Health = document.getElementById('player1P');
p1Health.innerHTML =  players[0].Name + ' HP: ' + players[0].Hp;
var p2Health = document.getElementById('player2P');
p2Health.innerHTML = players[1].Name + ' HP: ' + players[1].Hp;
display.defaultValue = 'Round: ' + round + ' - BEGIN';

/**** Game Function ****/
function gameStart() {
 /**** Code for Fight Button ****/
 button.innerHTML = 'FIGHT!';

 /**** Declaring Functions ****/
 var fight = function () {

   var minDmg = {
    player1: players[0].Dmg * 0.5,
    player2: players[1].Dmg * 0.5
   };

   var dmg = {
    player1: Math.ceil(Math.random() * (players[0].Dmg - minDmg.player1) + minDmg.player1),
    player2: Math.ceil(Math.random() * (players[1].Dmg - minDmg.player2) + minDmg.player2)
   };

   //Subtracting Player Damage from HP
   players[0].Hp -= dmg.player1;
   players[1].Hp -= dmg.player2;

   //Call the WinnerCheck function and store the returned data
   var results = winnerCheck();

   //Check results for any outcome and break out of the for loop
   if (results === 'No Winner') {
    round++;
    p1Health.innerHTML =  players[0].Name + ' HP: ' + players[0].Hp;
    p2Health.innerHTML = players[1].Name + ' HP: ' + players[1].Hp;
    display.defaultValue = 'Round: ' + round + ' - BEGIN';
   }
   else {
    p1Health.innerHTML =  players[0].Name + ' HP: ' + players[0].Hp;
    p2Health.innerHTML = players[1].Name + ' HP: ' + players[1].Hp;
    display.defaultValue = results;
    display.style.fontSize = 'x-small';
    button.innerHTML = 'Restart';
    button.removeEventListener('click', gameStart, false);
    button.addEventListener('click', restart, false);
   }

 };

 var winnerCheck = function () {
  //Set results to no winner
  var result = 'No Winner';

  //Change results depending on the outcome using conditionals
  if (players[0].Hp < 1 && players[1].Hp < 1) {
   result = 'You both died. DRAW';
  }

  else if (players[0].Hp < 1) {
   result = players[1].Name + ' Wins!';
  }

  else if (players[1].Hp < 1) {
   result = players[0].Name + ' Wins!';
  }

  //Return the result into the fight function
  return result;
 };

 /**** Main Code Starts Here ****/
 fight();
}

var restart = function() {
 /**** Player One VARS ****/
 players = [{
  Name: names[Math.floor(Math.random() * names.length)],
  Dmg: 20,
  Hp: 100},
  {Name: names[Math.floor(Math.random() * names.length)],
  Dmg: 20,
  Hp: 100
 }];
 /**** Round VAR Declaration ****/
 round = 0;

 button.removeEventListener('click', restart, false);
 button.addEventListener('click', gameStart,false);
};
