import React, { useState, useEffect } from "react";
import DecodingBoard from "./DecodingBoard";
import SelectPegs from "./SelectPegs";
import YouWon from "./EndgameMsgs/YouWon";
import YouLost from "./EndgameMsgs/YouLost";

function Gameboard() {
  // for a static solution:
  // const winArr = ["orange", "red", "navy", "purple"];

  // for a random soluion:
  const [winArr, setWinArr] = useState(["orange", "red", "navy", "purple"]);

  useEffect(() => {
    let url =
      "https://spreadsheets.google.com/feeds/list/1cSAd6p36nlYRXCkYskA0zhHJDtX0JcytTRhXVovisvI/od6/public/basic?alt=json";

    fetch(url)
      .then(res => res.json())
      .then(data => formatData(data));

    function formatData(data) {
      let solutionArr = [];
      while (solutionArr.length < 4) {
        let i = Math.floor(Math.random() * 6);
        solutionArr.push(data.feed.entry[i].title.$t);
      }
      setWinArr(solutionArr);
      console.log(solutionArr);
    }
  }, []);

  // first attempt at randomizing:
  // const setSolution = () => {
  //   let solution = [];
  //   while (solution.length < 4) {
  //     let i = Math.floor(Math.random() * 6);
  //     solution.push(colorsList[i]);
  //   }
  //   console.log(solution);
  //   return solution;
  // };
  // const winArr = setSolution();

  const colorsList = ["orange", "red", "green", "lightblue", "navy", "purple"];

  const [activeColor, setActiveColor] = useState("");

  const selectPeg = color => {
    setActiveColor(color);
  };

  const [youWon, setYouWon] = useState(false);
  const [youLost, setYouLost] = useState(false);

  const endGame = e => {
    if (e === "youWon") {
      setYouWon(true);
    } else {
      setYouLost(true);
    }
  };

  const resetBoard = () => {
    window.location.reload();
  };

  return (
    <div id="gameBoard">
      <div id="centering">
        <DecodingBoard
          activeColor={activeColor}
          endGame={endGame}
          winArr={winArr}
        />
        <SelectPegs
          activeColor={activeColor}
          colorsList={colorsList}
          selectPeg={selectPeg}
        />
        <YouLost winArr={winArr} youLost={youLost} resetBoard={resetBoard} />
        <YouWon youWon={youWon} resetBoard={resetBoard} />
      </div>
    </div>
  );
}

export default Gameboard;
