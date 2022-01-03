let rock = document.getElementById("rock");
let sissor = document.getElementById("sissor");
let paper = document.getElementById("paper");
let myChoise = document.getElementById("myChoise");
let yourChoise = document.getElementById("yourChoise");
let sameChoise = document.getElementById("sameChoise");
let result = document.getElementById("result");

let userScore = 0;
let computerScore = 0;

let score = document.getElementById("score");

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
    score.innerHTML = userScore + " : " + computerScore;
}

function lose(user, computer){
    computerScore++;
    score.innerHTML = userScore + " : " + computerScore;
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
    rock.addEventListener('click', () => {
        sameChoise.innerHTML = "";
        myChoise.innerHTML = "";
        myChoise.innerHTML = rock.innerHTML + ":";
        game('👊');
    });

    paper.addEventListener('click', () => {
        sameChoise.innerHTML = "";
        myChoise.innerHTML = "";
        myChoise.innerHTML = paper.innerHTML  + ":";
        game('🖐');
    });

    sissor.addEventListener('click', () => {
        sameChoise.innerHTML = "";
        myChoise.innerHTML = "";
        myChoise.innerHTML = sissor.innerHTML + ":";
        game('✌️');
    })
}

main();