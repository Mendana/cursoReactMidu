import { useState } from "react";
import confetti from "canvas-confetti";

import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { BoardMain } from "./components/BoardMain";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);
  //null es que no hay ganador y false que hay un empate
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn; // x or o
    setBoard(newBoard);

    const newTurn = (turn === TURNS.X) ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>

      <BoardMain board={board} updateBoard={updateBoard}></BoardMain>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} ></WinnerModal>
    </main>
  );
}

export default App;