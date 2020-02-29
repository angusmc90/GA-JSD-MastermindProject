import React from "react";

function YouWon(props) {
  let overlayClass;

  if (props.youWon === true) {
    overlayClass = "showOverlay";
  } else {
    overlayClass = "hideOverlay";
  }

  return (
    <div className={overlayClass}>
      <div id="win">
        CONGRATULATIONS!
        <br />
        <button
          id="playagain"
          onClick={() => {
            props.resetBoard();
          }}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}

export default YouWon;
