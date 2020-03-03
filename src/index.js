import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./components/HelloWorld";
import { ThemeProvider } from "styled-components";

const theme = {
  base: "#a04ed9",
  danger: "tomato",
  gradient: `linear-gradient(225deg, #00DBDE 0%, #FC00FF 100%);`
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HelloWorld />
  </ThemeProvider>,
  document.getElementById("app")
);
