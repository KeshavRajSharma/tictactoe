import React, { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="my-[16px] mx-[16px]" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
