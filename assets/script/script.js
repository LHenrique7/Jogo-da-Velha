let currentPlayer = "X"; // Guarda o jogador atual

// Padrões de vitória
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Função que verifica se algum player ganhou
function checkWinner() {
  // Seleciona todas as celulas do GameBoard
  game = document.querySelectorAll(".cell");

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      game[a].innerText &&
      game[a].innerText === game[b].innerText &&
      game[a].innerText === game[c].innerText
    ) {
      return game[a].innerText;
    }
  }
  return null;
}

function cellClick(cell) {
  if (cell.innerText === "") {
    cell.innerText = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }

  // Verifica se houve vitória após a jogada
  winner = checkWinner();

  if (winner === "X") {
    alert("Vitória Jogador 1");
  } else if (winner === "O") {
    alert("Vitória Jogador 2");
  }
}

function clean() {
  // Seleciona todas as celulas do GameBoard
  game = document.querySelectorAll(".cell");

  // Reseta o valor de cada célula
  game.forEach((cell) => {
    cell.innerText = "";
  });

  // Reseta o player para X
  currentPlayer = "X";
}
