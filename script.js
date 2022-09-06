/*
  Rock Paper Scissors 🚀🔥
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
  let rps = ['Rock', 'Paper', 'Scissors']
  let crand = Math.floor(Math.random() * rps.length)
  return rps[crand]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score
  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice)
  {
    score=0 
  }
  // All situations where human wins, set `score` to 1
  else if (playerChoice == 'Rock' && computerChoice == 'Scissors')
  {
    score=1
  }
  else if (playerChoice == 'Paper' && computerChoice == 'Rock')
  {
    score=1
  }
  else if (playerChoice == 'Scissors' && computerChoice == 'Paper')
  {
    score=1
  }

  // Otherwise human loses (aka set score to -1)
  else
  {
    score=-1
  }
  return score
}

//Global scope for totalscore  to update player and computer score
let totalscore={
  'computerScore':0,
  'playerScore' :0
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  let resultDiv = document.getElementById('result')
  if (score == 0)
    resultDiv.innerText = "It's a Draw!"
  else if (score == 1)
    resultDiv.innerText = "You Won!"
  else
    resultDiv.innerText = "You Lose!"

  //Display Score
  let playerscoreDiv = document.getElementById('player-score')
  playerscoreDiv.innerText = `Your Score: ${totalscore['playerScore']}`
  let computerscoreDiv = document.getElementById('computer-score')
  // computerscoreDiv.innerText = `Computer Score: ${totalscore['computerScore']}`

  //Display computer and human choice
  let choiceDiv = document.getElementById('hands')
  choiceDiv.innerText = `👨 ${playerChoice} vs 🤖 ${computerChoice}`

}
// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  let computerChoice=getComputerChoice()
  let score = getResult(playerChoice,computerChoice)
  if(score==1)
  {
    totalscore['playerScore']+=1
    totalscore['computerScore']-=1
  }
  if(score==-1)
  {
    totalscore['playerScore']-=1
    totalscore['computerScore']+=1
  }
  showResult(score, playerChoice, computerChoice)
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  let buttonSelector = document.querySelectorAll('.rpsButton')
  // * Adds an on click event listener to each RPS button and every time we click it, it calls the onClickRPS function with the RPS button that was last clicked *

  buttonSelector.forEach(button=>
    {
      button.onclick=()=>onClickRPS(button.value)
    })
  
  // Add a click listener to the end game button that runs the endGame() function on click
  endgameDiv = document.getElementById('endGameButton')
  endgameDiv.onclick=()=>endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let playerscoreDiv = document.getElementById('player-score')
  let handsDiv = document.getElementById('hands')
  let resultDiv = document.getElementById('result')

  totalscore['playerScore']=totalscore['computerScore']=0
  playerscoreDiv.innerText = handsDiv.innerText = resultDiv.innerText = ''
}


playGame()



