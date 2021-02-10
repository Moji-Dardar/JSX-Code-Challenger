//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Favourite Restaurants in Markham</h1>
    <ul>
      <li>Fat Ninja Bite</li>
      <li>Yan Can Cook</li>
      <li>HKS Barbeque and Noodles House</li>
    </ul>
  </div>,
  document.getElementById("root")
);
