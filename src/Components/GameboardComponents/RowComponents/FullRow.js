import React from "react";
import PegRow from "./PegRow";
import Submit from "./Submit";
import Hints from "./Hints";

function FullRow(props) {
  return (
    <div id={props.rowID}>
      <PegRow
        rowNum={props.rowNum}
        guessNum={props.guessNum}
        guessArr={props.guessArr.pegs}
        buildGuess={props.buildGuess}
      />
      <Submit
        guessArr={props.guessArr.pegs}
        rowNum={props.rowNum}
        guessNum={props.guessNum}
        submitGuess={props.submitGuess}
      />
      <Hints hintsArr={props.guessArr.hints} />
    </div>
  );
}

export default FullRow;
