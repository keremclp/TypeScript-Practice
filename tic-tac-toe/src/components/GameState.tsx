import { useState } from "react";

export type Value = 'X' |'O'| null;

export type BoardState = Value[]

const createBoardState = () => Array<Value>(9).fill(null)

export const calculateWinner = (boardState: BoardState): Value | null => {
    const winningLines = [
        [0,1,2], // top row
        [3,4,5], // middle row
        [6,7,8], // bottom row
        [0,3,6], // first column
        [1,4,7], // second column
        [2,5,8], // third column
        [0,4,8], // diagonal
        [2,4,6], // diagonal
    ]

    for (let i=0; i<winningLines.length ; i++) {
        const [a,b,c] = winningLines[i]
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return boardState[a]
        }
    }
    return null
}

export type GameState = {
    history: BoardState[];
    step: number;
}


export function useGameState() {
    const [gameState, setGameState] = useState<GameState>({
      history: [createBoardState()],
      step: 0,
    });

    const current = gameState.history[gameState.step];
    const xIsNext = (gameState.step % 2) === 0;
    const winner = calculateWinner(current);
  
    function handleClick(square: number) {
      const history = gameState.history.slice(0, gameState.step + 1);
      const boardState = history[history.length - 1];
      if (calculateWinner(boardState) || boardState[square]) {
        return;
      }
      const newBoardState = boardState.slice();
      newBoardState[square] = (gameState.step % 2) === 0 ? 'X' : 'O';
      history.push(newBoardState);
      setGameState({
        history: history,
        step: history.length - 1,
      });
    }
    function jumpTo(step: number) {
      setGameState({
        history: gameState.history,
        step,
      });
    }
    
    return {
      gameState,
      current,
      xIsNext,
      winner,
      handleClick,
      jumpTo
    };
  }