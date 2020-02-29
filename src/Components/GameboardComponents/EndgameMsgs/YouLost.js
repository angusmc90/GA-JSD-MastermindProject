import React from "react";

function YouLost(props) {
  let overlayClass;

  if (props.youLost === true) {
    overlayClass = "showOverlay";
  } else {
    overlayClass = "hideOverlay";
  }

  const winningArr = props.winArr.map((d, i) => {
    return <li className="activePeg" id={d} key={i} />;
  });

  return (
    <div className={overlayClass}>
      <div id="lose">
        GAME OVER
        <br />
        {winningArr}
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

export default YouLost;
