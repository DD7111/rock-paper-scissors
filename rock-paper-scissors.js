function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors']
    let computerSelection = options[Math.floor(Math.random()*options.length)]
    console.log( computerSelection)
    return computerSelection
}

function getPlayerSelection() {
    let input = prompt('Rock, Paper or Scissors? ')
    playerSelection = input.toLowerCase()
    let validAns = false
    while (validAns === false) {
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
            validAns = true
        } else {
            input = prompt('Please choose rock, paper or scissors.')
            playerSelection = input.toLowerCase()
            validAns = false
        }
    }
    console.log(playerSelection)
    return playerSelection
    
}



function playRound(computerSelection, playerSelection) {
    computerSelection = getComputerChoice()
    playerSelection = getPlayerSelection()
    console.log(computerSelection)
    console.log(playerSelection)
    if (playerSelection === 'rock' && computerSelection == 'paper') {
        return 'Sorry, you lose! Paper beats rock'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Congratulations you win! Paper beats rock'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Sorry, you lose! Rock beats scissors'
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Congratulations you win! Rock beats scissors'
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Sorry, you lose! Scissors beats paper'
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Congratulations you win! Scissors beats paper'
    } else if(playerSelection === computerSelection) {
        return 'Draw!'
    }
    
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound())
     }
}

game()