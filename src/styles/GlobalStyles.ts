import { createGlobalStyle } from "styled-components";
import "remixicon/fonts/remixicon.css";

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "DM Sans", sans-serif;
  line-height: 1.6;
  background-color: #222528;
}

h1,
h2,
h3 {
  font-family: "Helvetica", sans-serif;
  font-weight: bold;
}

input{
  border: 0;
  border-radius: 0;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

input[type="text"]:focus {
  outline: none;
  border: none; 
}

i{
  display: block;
  color: #94979a;
}

td{
  vertical-align: top;
}

::-webkit-scrollbar{
  height: 5px;
  width: 5px;
  background-color: #222528;
}
::-webkit-scrollbar-thumb  {
  background-color: #94979a;
  border-radius: 6px;
}
::-webkit-scrollbar:window-inactive {
  display: none;
}

.link {
  text-decoration: none;
}

`;

export default GlobalStyles;
