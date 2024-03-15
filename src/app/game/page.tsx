"use client";
import { useReducer, useState } from "react";
import styles from "./page.module.css";
import Cell from "./Cell";
import Title from "../Title";
import Link from "next/link";
import GameOver from "./GameOver";

export default function Game() {
  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [iterations, setIterations] = useReducer(
    (iterations: number, number: number) => iterations + number,
    0,
  );
  const [board, setBoard] = useState(Array(100).fill(false));

  const handleClick = (index: number) => {
    const newBoard = board.map((cell, i) => {
      if (i === index) {
        return !cell;
      } else {
        return cell;
      }
    });
    setBoard(newBoard);
  };

  const handleContinue = () => {
    setPlaying(true);
  };

  const handleIterate = () => {
    simulateGame();
  };

  const handleStop = () => {
    setBoard(Array(100).fill(false));
    setPlaying(false);
    setIterations(-iterations);
  };

  const handleAccept = () => {
    setGameOver(false);
  };

  const simulateGame = () => {
    const newBoard = board.map((cell, index) => {
      if (cell) {
        let neighbours = countNeighbours(index);
        if (neighbours == 2 || neighbours == 3) {
          return cell;
        } else {
          return !cell;
        }
      } else {
        if (countNeighbours(index) == 3) {
          return !cell;
        } else {
          return cell;
        }
      }
    });
    setBoard(newBoard);
    setIterations(1);
    if (newBoard.some((cell) => cell)) {
      setPlaying(true);
    } else {
      setPlaying(false);
      setGameOver(true);
    }
  };

  const countNeighbours = (index: number) => {
    let neighbors = 0;
    if (index === 0) {
      if (board[index + 1]) {
        neighbors++;
      }
      if (board[index + 10]) {
        neighbors++;
      }
      if (board[index + 11]) {
        neighbors++;
      }
    } else if (index > 0 && index < 9) {
      if (board[index - 1]) {
        neighbors++;
      }
      if (board[index + 1]) {
        neighbors++;
      }
      if (board[index + 9]) {
        neighbors++;
      }
      if (board[index + 10]) {
        neighbors++;
      }
      if (board[index + 11]) {
        neighbors++;
      }
    } else if (index === 9) {
      if (board[index - 1]) {
        neighbors++;
      }
      if (board[index + 9]) {
        neighbors++;
      }
      if (board[index + 10]) {
        neighbors++;
      }
    } else if (index % 10 === 0 && index != 90 && index != 0) {
      if (board[index - 10]) {
        neighbors++;
      }
      if (board[index - 9]) {
        neighbors++;
      }
      if (board[index + 1]) {
        neighbors++;
      }
      if (board[index + 10]) {
        neighbors++;
      }
      if (board[index + 11]) {
        neighbors++;
      }
    } else if ((index + 1) % 10 === 0 && index != 9 && index != 99) {
      if (board[index - 11]) {
        neighbors++;
      }
      if (board[index - 10]) {
        neighbors++;
      }
      if (board[index - 1]) {
        neighbors++;
      }
      if (board[index + 9]) {
        neighbors++;
      }
      if (board[index + 10]) {
        neighbors++;
      }
    } else if (index === 90) {
      if (board[index - 10]) {
        neighbors++;
      }
      if (board[index - 9]) {
        neighbors++;
      }
      if (board[index + 1]) {
        neighbors++;
      }
    } else if (index > 90 && index < 99) {
      if (board[index - 11]) {
        neighbors++;
      }
      if (board[index - 10]) {
        neighbors++;
      }
      if (board[index - 9]) {
        neighbors++;
      }
      if (board[index - 1]) {
        neighbors++;
      }
      if (board[index + 1]) {
        neighbors++;
      }
    } else if (index === 99) {
      if (board[index - 11]) {
        neighbors++;
      }
      if (board[index - 10]) {
        neighbors++;
      }
      if (board[index - 1]) {
        neighbors++;
      }
    } else {
      if (board[index - 11]) {
        neighbors++;
      }
      if (board[index - 10]) {
        neighbors++;
      }
      if (board[index - 9]) {
        neighbors++;
      }
      if (board[index - 1]) {
        neighbors++;
      }
      if (board[index + 1]) {
        neighbors++;
      }
      if (board[index + 9]) {
        neighbors++;
      }
      if (board[index + 10]) {
        neighbors++;
      }
      if (board[index + 11]) {
        neighbors++;
      }
    }
    return neighbors;
  };

  return (
    <main className={styles.main}>
      {gameOver ? (
        <GameOver numberOfIterations={iterations} handleAccept={handleAccept} />
      ) : (
        <></>
      )}
      <div className={styles.header_container}>
        <Link className={styles.button} href={"/"}>
          Back
        </Link>
        <Title big={false} />
      </div>

      <h1 className={styles.title}>
        {playing ? "Life is Iterating" : "Select your starting cells!"}
      </h1>

      <div className={styles.board}>
        {board.map((cell, i) => (
          <Cell
            playing={playing}
            key={i}
            state={cell}
            index={i}
            handleClick={handleClick}
          />
        ))}
      </div>

      <p>Cells Alive: {board.filter((cell) => cell).length}</p>

      {playing ? (
        <div className={styles.button_container}>
          <div className={styles.iterations}>
            <p className={styles.iterations_text}>{iterations} iterations</p>
            <button className={styles.button} onClick={handleIterate}>
              Iterate
            </button>
          </div>

          <button className={styles.button} onClick={handleStop}>
            Stop
          </button>
        </div>
      ) : (
        <button className={styles.button} onClick={handleContinue}>
          Continue
        </button>
      )}
    </main>
  );
}
