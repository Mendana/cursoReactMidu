import { WINNER_COMBOS } from '../constants';

export const checkWinnerFrom = (boardToCheck) => {
    //Comprobar si hay un ganador
    //Devuelve x, o o null
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo;
      if(boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]; //Devuelve x o o
      }
    }
    return null;
  }


export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null);
}