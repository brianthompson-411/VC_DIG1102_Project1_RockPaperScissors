//Variables
let roundsChosen;
let usersWeapon;
let computersWeapon;
let i = 0;
let globalWins = 0;
let globalLosses = 0;
let globalTies = 0;


//Prompt User for amount of rounds
roundsChosen = window.prompt("How many rounds do you want to play");

//Process Game
for (i = 0; i < roundsChosen; i++){

    //Parsing String to an integer
    roundsChosen = parseInt(roundsChosen, 10);

    //Prompt user of choice of: Rock, Paper, or Scissors
    while (usersWeapon != "r" || usersWeapon != "p" || usersWeapon != "s"){
        usersWeapon = window.prompt("Please choose one of the following: r - for rock, p - for paper, or s - for scissors");

    }

    //Computer's Randomly Selected Weapon
    computersWeapon = (Math.floor(Math.random() * 3));

    //Parsing Computer's Randomly Choosen Weapon for Comparison
    if (computersWeapon === 0){
        computersWeapon = "r";
    }else if(computersWeapon === 1){
        computersWeapon = "p";
    }else if (computersWeapon === 2){
        computersWeapon = "s";
    }

    //Determine if there is a winner
    //Rocks Wins
    if (computersWeapon === "r" && usersWeapon === "s"){
        globalLosses++;
    }else if(usersWeapon === "r" && computersWeapon === "s"){
        globalWins++;
    }
    
    //Paper Wins
    if (computersWeapon === "p" && usersWeapon === "r"){
        globalLosses++;
    }else if(usersWeapon === "p" && computersWeapon === "r"){
        globalWins++;
    }

    //Scissors Wins
    if (computersWeapon === "s" && usersWeapon === "p"){
        globalLosses++;
    }else if(usersWeapon === "s" && computersWeapon === "p"){
        globalWins++;
    }

    //Ties
    if (computersWeapon === usersWeapon){
        i--
        globalTies++
    }
}

window.alert(`You won ${globalWins} times, you lost ${globalLosses}, and you tied ${globalTies} times`);
