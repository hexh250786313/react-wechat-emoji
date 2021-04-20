import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Emoji from './Emoji'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Emoji />
  </StrictMode>,
  rootElement
);
