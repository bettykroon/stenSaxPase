let rock = document.getElementById("rock");
let sissor = document.getElementById("sissor");
let paper = document.getElementById("paper");
let myChoise = document.getElementById("myChoise");
let yourChoise = document.getElementById("yourChoise");
let sameChoise = document.getElementById("sameChoise");
let container = document.getElementById("container");
let myScore = document.getElementById("myScore");
let yourScore = document.getElementById("yourScore");
let scoreContainer = document.getElementById("scoreContainer");

let userScore = 0;
let computerScore = 0;

function getComputerChoise(){
    let choises = [ '👊', '🖐', '✌️'];
    let randomChoise = Math.floor(Math.random() * 3);
    return choises[randomChoise];
}

function userChoise(choise){
    if(choise == '🖐') return '🖐';
    if(choise == '✌️') return '✌️';
    return '👊';
}

function win(user, computer){
    userScore++;
    myScore.innerHTML = userScore;
    yourScore.innerHTML = computerScore;
    if(userScore == 10){
        sameChoise.innerHTML = "DU VANN!!";
        container.innerHTML = "";
        let playAgain = document.createElement("button");
        playAgain.id = "playAgain";
        playAgain.innerText = "Spela igen?";
        sameChoise.append(playAgain);
        playAgain.addEventListener("click", ()=> {
            location.reload();
        })
    }
}

function lose(user, computer){
    computerScore++;
    myScore.innerHTML = userScore;
    yourScore.innerHTML = computerScore;
    if(computerScore == 10){
        sameChoise.innerHTML = "DU FÖRLORADE!!";
        container.innerHTML = "";
        let playAgain = document.createElement("button");
        playAgain.id = "playAgain";
        playAgain.innerText = "Spela igen?";
        sameChoise.append(playAgain);
        playAgain.addEventListener("click", ()=> {
            location.reload();
        })
    }
}

function same(user, computer){
    sameChoise.innerHTML = "Oavgjort!"
}

function game(myChoise){
    let computerChoise = getComputerChoise();
    yourChoise.innerHTML = computerChoise;
    switch(myChoise + computerChoise){
        case '🖐👊':
        case '👊✌️':
        case '✌️🖐':
            win(myChoise, computerChoise);
            break;
        case '👊🖐':
        case '✌️👊':
        case '🖐✌️':
            lose(myChoise, computerChoise);
            break;
        case '👊👊':
        case '✌️✌️':
        case '🖐🖐':
            same(myChoise, computerChoise);
            break;
    }
}

function main(){
    scoreContainer.style.visibility = "hidden";
    rock.addEventListener('click', () => {
        scoreContainer.style.visibility = "visible";
        sameChoise.innerHTML = "";
        myChoise.innerHTML = "";
        myChoise.innerHTML = rock.innerHTML + " :";
        game('👊');
    });

    paper.addEventListener('click', () => {
        scoreContainer.style.visibility = "visible";
        sameChoise.innerHTML = "";
        myChoise.innerHTML = "";
        myChoise.innerHTML = paper.innerHTML  + " :";
        game('🖐');
    });

    sissor.addEventListener('click', () => {
        scoreContainer.style.visibility = "visible";
        sameChoise.innerHTML = "";
        myChoise.innerHTML = "";
        myChoise.innerHTML = sissor.innerHTML + " :";
        game('✌️');
    });
}

main();