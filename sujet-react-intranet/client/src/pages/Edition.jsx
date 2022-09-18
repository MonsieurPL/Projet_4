import React from "react";
import Header from "../components/header";
import Editform from "../components/EditForm";

// VARIABLES
const magicalUnderlines = Array.from(
  document.querySelectorAll(".underline--magical")
);

const gradientAPI =
  "https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json";

// HELPER FUNCTIONS

// 1. Get random number in range. Used to get random index from array.
const randNumInRange = (max) => Math.floor(Math.random() * (max - 1));

// 2. Merge two separate array values at the same index to
// be the same value in new array.
const mergeArrays = (arrOne, arrTwo) =>
  arrOne.map((item, i) => `${item} ${arrTwo[i]}`).join(", ");

// 3. Curried function to add a background to array of elms
const addBackground = (elms) => (color) => {
  elms.forEach((el) => {
    el.style.backgroundImage = color;
  });
};
// 4. Function to get data from API
const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
};

// 5. Partial Application of addBackground to always apply
// background to the magicalUnderlines constant
const addBackgroundToUnderlines = addBackground(magicalUnderlines);

// GRADIENT FUNCTIONS

// 1. Build CSS formatted linear-gradient from API data
const buildGradient = (obj) =>
  `linear-gradient(${obj.direction}, ${mergeArrays(
    obj.colors,
    obj.positions
  )})`;

// 2. Get single gradient from data pulled in array and
// apply single gradient to a callback function
const applyGradient = async (url, callback) => {
  const data = await getData(url);
  const gradient = buildGradient(data[randNumInRange(data.length)]);
  callback(gradient);
};

// RESULT
applyGradient(gradientAPI, addBackgroundToUnderlines);

const PageEdition = () => {
  return (
    <>
      <div id="back-settings">
        <Header key="15" />
        <h1 id="pitch">
          Éditez votre <span className="underline--magical">profil</span>
        </h1>
        <p id="intro">Modifiez et prévisualisez votre profil avec INTRA !</p>
        <Editform key="26" />
      </div>
    </>
  );
};

export default PageEdition;
