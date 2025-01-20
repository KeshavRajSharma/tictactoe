import React from "react";

const Calculatewinner = ({ squares }) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 3, 6],
    [3, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let k = 0;
  let j = 0;
  for (k; k < lines.length; k++) {
    const [a, b, c] = lines[k];
    // console.log(a, b, c);
    // console.log(k);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return <div>Winner is :{squares[c]}</div>;
    }
  }
};

export default Calculatewinner;
