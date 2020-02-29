import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// QUESTIONS:
// - the show rules doesn't expand until the SECOND click
// - the HINTS div is off?
// - better/easier way to code the parts?
// ---- ex: reseting the board; now needs to be done with the API call to googlesheets
// ---- ex: loading the board initially
