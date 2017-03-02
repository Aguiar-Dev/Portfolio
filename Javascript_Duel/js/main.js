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

/**** Code for Fight Button ****/
button.innerHTML = 'FIGHT!';

/**** Random Name Assortment to pick random names every match ****/
var names = ['Superman', 'Batman', 'Joker', 'Lex Luthor', 'Green Arrow', 'Deathstroke', 'Wonder Woman', 'Ares', 'Martian Manhunter', 'Lobo', 'Flash', 'Doomsday', 'Green Lantern', 'Sinestro', 'General Zod', 'Batgirl', 'Harley Queen', 'Nightwing', 'Solomon Grundy', 'Catwoman', 'Scorpion', 'Killer Frost', 'Bane', 'Black Adam', 'Cyborg', 'Raven', 'Aquaman', 'Zatana', 'Shazam', 'Hawkgirl'];

/**** Players Object Array ****/
var players = [{
        name: names[Math.floor(Math.random() * names.length)],
        dmg: 30,
        hp: 100
    },
    {
        name: names[Math.floor(Math.random() * names.length)],
        dmg: 30,
        hp: 100
    }
];

/**** Variable Declarations ****/
var round = 0;
var display = document.getElementById('roundCount');
var p1Health = document.getElementById('player1P');
var p2Health = document.getElementById('player2P');

/**** Modify Player names and health displays ****/
p1Health.innerHTML = players[0].name + ': ' + players[0].hp + 'HP';
p2Health.innerHTML = players[1].name + ': ' + players[1].hp + 'HP';
display.defaultValue = 'Round - ' + round;

/**** Game Function ****/
function gameStart() {
    /**** Main Code Starts Here ****/
    fight();
}

/**** Declaring Functions ****/
var fight = function() {

    var dmgMult = Math.floor((Math.random() * 25) + 1);

    var dmg = {
        player1: Math.floor(Math.random() * (players[0].dmg - dmgMult) + 1),
        player2: Math.floor(Math.random() * (players[1].dmg - dmgMult) + 1)
    };

    //Subtracting Player Damage from HP
    players[0].hp -= dmg.player1;
    players[1].hp -= dmg.player2;

    //Call the WinnerCheck function and store the returned data
    var results = winnerCheck();

    //Check results for any outcome and break out of the for loop
    if (results === 'No Winner') {
        round++;
        p1Health.innerHTML = players[0].name + ': ' + players[0].hp + 'HP';
        p2Health.innerHTML = players[1].name + ': ' + players[1].hp + 'HP';
        display.defaultValue = 'Round - ' + round;
    } else {
        p1Health.innerHTML = players[0].name + ': ' + players[0].hp + 'HP';
        p2Health.innerHTML = players[1].name + ': ' + players[1].hp + 'HP';
        display.defaultValue = results;
        display.style.fontSize = 'x-small';
        button.innerHTML = 'Restart';
        button.removeEventListener('click', gameStart, false);
        button.addEventListener('click', restart, false);
    }

};

var winnerCheck = function() {
    //Set results to no winner
    var result = 'No Winner';

    //Change results depending on the outcome using conditionals
    if (players[0].hp < 1 && players[1].hp < 1) {
        result = 'You both died. DRAW';
    } else if (players[0].hp < 1) {
        result = players[1].name + ' Wins!';
    } else if (players[1].hp < 1) {
        result = players[0].name + ' Wins!';
    }

    //Return the result into the fight function
    return result;
};

var restart = function() {
    /**** Player One VARS ****/
    players = [{
            name: names[Math.floor(Math.random() * names.length)],
            dmg: 30,
            hp: 100
        },
        {
            name: names[Math.floor(Math.random() * names.length)],
            dmg: 30,
            hp: 100
        }
    ];
    /**** Round VAR Declaration ****/
    round = 0;

    /**** Reset HTML View ****/
    p1Health.innerHTML = players[0].name + ': ' + players[0].hp + 'HP';
    p2Health.innerHTML = players[1].name + ': ' + players[1].hp + 'HP';
    display.defaultValue = 'Round - ' + round;

    /**** Reset the FIGHT btn ****/
    button.innerHTML = 'FIGHT!';

    button.removeEventListener('click', restart, false);
    button.addEventListener('click', gameStart, false);
};
