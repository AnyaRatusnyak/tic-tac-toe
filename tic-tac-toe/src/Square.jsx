const Square = ({ value, onSquareClick }) => {
  return (
    <button type="button" onClick={onSquareClick}>
      {value}
    </button>
  );
};
export default Square;
