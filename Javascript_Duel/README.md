*[back to root directory](../../../)*

# Simple Javascript Duel

## Table of Contents

1. [Project Description](#projectdesc)
2. [Game Functions](#functions)
3. [Resources](#resources)

<a name="projectdesc"></a>
## Project Description

This is one of my first project at Full Sail University using simple Javascript, HTML and CSS structure. The purpose of the project was to practice simple javascript functionality by using DOM manipulation and modular functions. Please keep in mind this is an old project thus the code written is more simplistic than my current projects. Included in the repository is the flowchart that was made to lay out the logic for the application in a visual manner.

Since it was a individual project I modeled my character roster and game logic around the Injustice: Gods Among Us video game. I do not own the rights to the Injustice characters or the name, but simply utilized them for personal work recreation.

<a name="functions"></a>
## Game Functions

`fight()` - This function is what handles the main bulk of the game. In this function the player damage for the round is calculated then subtracted from the player healths. After this it runs the winnerCheck function and based on the result displays a response.

```Javascript
function fight(){

    var dmgMult = Math.floor((Math.random() * 25) + 1);

    var dmg = {
        player1: Math.floor(Math.random() * (players[0].dmg - dmgMult) + 1),
        player2: Math.floor(Math.random() * (players[1].dmg - dmgMult) + 1)
    };

    //Subtracting Player Damage from HP
    players[0].hp -= dmg.player1;
    players[1].hp -= dmg.player2;

    //Call the WinnerCheck function and store the returned data
    var result = winnerCheck();

    //Check results for any outcome and break out of the for loop
    if (!result) {
        round++;
        p1Health.innerHTML = players[0].name + ': ' + players[0].hp + 'HP';
        p2Health.innerHTML = players[1].name + ': ' + players[1].hp + 'HP';
        display.innerHTML = 'Round - ' + round;
    } else {
        p1Health.innerHTML = players[0].name + ': ' + players[0].hp + 'HP';
        p2Health.innerHTML = players[1].name + ': ' + players[1].hp + 'HP';
        display.innerHTML = result;
        button.innerHTML = 'Restart';
        button.removeEventListener('click', fight, false);
        button.addEventListener('click', restart, false);
    }

}
```

`winnerCheck()` - This function compares players healths in order to decide which player has one. Once the check has been realized it returns the result.

```Javascript
var winnerCheck = function() {
    //Set results to no winner
    var result;

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
}
```

`restart()` - This function handles reseting the game back to square one. It is only accessible once the current game finishes. It resets all variables back to the default and chooses new characters for the next game.

```Javascript
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
    display.innerHTML = 'Round - ' + round;

    /**** Reset the FIGHT btn ****/
    button.innerHTML = 'FIGHT!';

    button.removeEventListener('click', restart, false);
    button.addEventListener('click', fight, false);
}
```

<a name="resources"></a>
## Resources

These are links to the resources used for this project.

- [Duel Flowchart](./Duel-Flowchart-Aguiar-Fernando.pdf)
- [Creative Button Designs](https://tympanus.net/Development/CreativeButtons/)
- [CSS Styling Tricks](https://css-tricks.com/)
- [Injustice Background](./images/injustice_characters.png)
