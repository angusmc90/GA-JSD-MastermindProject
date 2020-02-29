import React from "react";

function PegRow(props) {
  const rowNum = props.rowNum;

  const pegs = props.guessArr.map((d, i) => {
    if (rowNum === props.guessNum) {
      return (
        <li
          className="activePeg"
          id={d}
          rownum={rowNum}
          indexpos={i}
          key={i}
          onClick={e =>
            props.buildGuess(
              e.target.getAttribute("indexpos"),
              e.target.getAttribute("rownum")
            )
          }
        />
      );
    } else {
      return <li className="peg" id={d} rownum={rowNum} indexpos={i} key={i} />;
    }
  });

  return <div id="pegRow">{pegs}</div>;
}

export default PegRow;
