import React, { useEffect, useState } from "react";
import letterDice from "./letterDice";
import { shuffle } from "lodash";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Board = ({ isStopped, setDuration, setIsStopped }) => {
  const [board, setBoard] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    createBoard();
  }, []);

  const startNewGame = () => {
    setModalIsOpen(true);
  };

  const createBoard = () => {
    const grid = shuffle(letterDice).map(
      (die) => die[Math.floor(Math.random() * die.length)]
    );
    setBoard(grid);
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
          <p
            className="Cube"
            key={i}
            style={
              isStopped ? { color: "rgb(225, 221, 221)" } : { color: "black" }
            }
          >
            {cube}
          </p>
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleRotate} disabled={isStopped}>
          Rotate
        </button>
        <button
          onClick={() => {
            startNewGame();
            setIsStopped(true);
          }}
        >
          Reset
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="New Game Warning"
        style={{
          content: {
            height: "125px",
            width: "300px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <h2 style={{ textAlign: "center" }}>Start a New Game?</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={() => {
              setIsStopped(true);
              setModalIsOpen(false);
            }}
          >
            No
          </button>
          <button
            onClick={() => {
              createBoard();
              setModalIsOpen(false);
              setDuration(180);
              setIsStopped(true);
            }}
          >
            Yes
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Board;
