import React from "react";

function Header() {
  const toggleRules = e => {
    // console.log("click");
    var rules = document.getElementById("rules");
    var rulesTxt = document.getElementById("rulesToggle");
    if (rules.style.display === "none") {
      rules.style.display = "block";
      rulesTxt.innerHTML = "Hide Rules";
    } else {
      rules.style.display = "none";
      rulesTxt.innerHTML = "Show Rules";
    }
  };

  return (
    <header>
      <span className="orange letters">M</span>
      <span className="red letters">A</span>
      <span className="green letters">S</span>
      <span className="lightblue letters">T</span>
      <span className="navy letters">E</span>
      <span className="purple letters">R</span>
      <span className="letters">M</span>
      <span className="letters">I</span>
      <span className="letters">N</span>
      <span className="letters">D</span>
      <br />
      <button id="rulesToggle" onClick={() => toggleRules()}>
        Show Rules
      </button>
      <div id="rules">
        Try to guess the pattern, in both order and color, within ten turns.
        After submitting a row, a small black peg is placed for each code peg
        from the guess which is correct in both color and position. A white peg
        indicates the existence of a correct color code peg placed in the wrong
        position.
        <br />
        <br />
        More info on{" "}
        <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">
          Wikipedia
        </a>
        <br />
        <br />
      </div>
    </header>
  );
}

export default Header;
