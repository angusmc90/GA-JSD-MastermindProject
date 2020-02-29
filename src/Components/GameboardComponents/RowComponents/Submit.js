import React from "react";

function Submit(props) {
  if (props.rowNum === props.guessNum && !props.guessArr.includes("empty")) {
    return (
      <div
        id="activeSubmit"
        rownum={props.rowNum}
        onClick={e => props.submitGuess(e.target.getAttribute("rownum"))}
      >
        &#10003;
      </div>
    );
  } else {
    return (
      <div id="submit" rownum={props.rowNum}>
        &#10003;
      </div>
    );
  }
}

export default Submit;
