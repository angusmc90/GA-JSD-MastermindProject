import React from "react";

function Hints(props) {
  const hintArr = props.hintsArr.map((d, i) => {
    return <li className={d} key={i} />;
  });

  return <div id="hints"> {hintArr} </div>;
}

export default Hints;
