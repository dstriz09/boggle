import React, { useEffect, useState } from "react";
import letterDice from "./letterDice";
import { shuffle } from "lodash";

const Board = () => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    createBoard();
  }, []);

  const createBoard = () => {
    const grid = shuffle(letterDice).map(
      (die) => die[Math.floor(Math.random() * die.length)]
    );
    setBoard(grid);
    console.log(grid);
    return grid;
  };

  const handleRotate = () => {
    const rotatedBoard = [
      board[12],
      board[8],
      board[4],
      board[0],
      board[13],
      board[9],
      board[5],
      board[1],
      board[14],
      board[10],
      board[6],
      board[2],
      board[15],
      board[11],
      board[7],
      board[3],
    ];
    setBoard(rotatedBoard);
  };

  return (
    <div className="container">
      <div className="Board">
        {board.map((cube, i) => (
          <p className="Cube" key={i}>
            {cube}
          </p>
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleRotate}>Rotate</button>
        <button onClick={createBoard}>New Game</button>
      </div>
    </div>
  );
};

export default Board;

// 12 - 0
// 8 - 1
// 4 - 2
// 0 - 3
// 13 - 4
// 9 - 5
// 5 - 6
// 1 - 7
// 14 - 8
// 10 - 9
// 6 - 10
// 2 - 11
// 15 - 12
// 11 - 13
// 7 - 14
// 3 - 15
