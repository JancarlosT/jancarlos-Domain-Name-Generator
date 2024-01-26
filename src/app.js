/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let pronoun1 of pronoun) {
    for (let adj1 of adj) {
      for (let noun1 of noun) {
        console.log(`${pronoun1}${adj1}${noun1}.com`);
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
