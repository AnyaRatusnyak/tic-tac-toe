import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = () => {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";

    setSquares(nextSquares);
  };
  return (
    <div>
      <div>
        <Square value={squares} onSquareClick={handleClick} />

        <Square value={squares} onSquareClick={handleClick} />

        <Square value={squares} onSquareClick={handleClick} />
      </div>
      <div>
        <Square value={squares} onSquareClick={handleClick} />

        <Square value={squares} onSquareClick={handleClick} />

        <Square value={squares} onSquareClick={handleClick} />
      </div>
      <div>
        <Square value={squares} onSquareClick={handleClick} />

        <Square value={squares} onSquareClick={handleClick} />

        <Square value={squares} onSquareClick={handleClick} />
      </div>
    </div>
  );
};

export default Board;
