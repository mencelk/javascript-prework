let computerWins, playerWins;

const buttonRock = document.getElementById('button-rock'),
  buttonPaper = document.getElementById('button-paper'),
  buttonScissors = document.getElementById('button-scissors');

  // Funkcja przyciskow
function buttonClicked(argButtonName) {
  clearMessages();

  //Przypisanie wyboru
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else {
      return 'nożyce';
    }
  }

  //Porownanie wyborow
  function displayResult(argPlayerMove, argComputerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
      playerWins++;
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
      playerWins++;
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
      playerWins++;
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis');
    } else {
      printMessage('Przegrywasz :(');
      computerWins++;
    }
    printMessage('Wygrane gracza: ' + playerWins + ', wygrane komputera: ' + computerWins);
  }

  const playerMove = argButtonName,
    randomNumber = Math.floor(Math.random() * 3 + 1),
    computerMove = getMoveName(randomNumber);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });