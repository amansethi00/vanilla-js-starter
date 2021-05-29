import {App} from "./App";
import Logo from "./logo.svg";
document.getElementById(
  "root"
).innerHTML = `<h2>Hello Everyone<img src=${Logo}></img>! ${App({
  name: "Sethi",
})}</h2>`;
