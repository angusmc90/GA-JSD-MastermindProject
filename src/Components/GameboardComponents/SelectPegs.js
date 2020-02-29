import React from "react";

function SelectPegs(props) {
  const selectPegList = props.colorsList.map((d, i) => {
    if (d === props.activeColor) {
      return <li id={d} key={i} style={{ border: "2px solid black" }} />;
    } else {
      return <li id={d} key={i} onClick={e => props.selectPeg(e.target.id)} />;
    }
  });

  return <div id="selectPegs">{selectPegList}</div>;
}

export default SelectPegs;
