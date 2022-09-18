import axios from "axios";
import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./styles/Randomusercard.css";

const Randomusercard = () => {
  const [randomUser, setRandomuser] = useState([]);

  const getRandom = async () => {
    let randomArray = [];
    for (let i = 1; i <= 1; i++) {
      randomArray.push(await getrandomUserData(i));
    }
    console.log(randomArray);
    setRandomuser(randomArray);
  };

  const auth = localStorage.getItem("token");

  const getrandomUserData = async () => {
    const res = await axios.get(
      `http://localhost:8000/api/collaborateurs/random`,
      {
        headers: { Authorization: `bearer ${auth}` },
      }
    );
    return res;
  };

  useEffect(() => {
    getRandom();
  }, []);

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

  return (
    <div className="test-accueil">
      {randomUser.map((randomUser) => (
        <>
          <p key="2" id="bonjour">
            {" "}
            Avez-vous dit <span className="underline--magical">bonjour à</span>
          </p>
          <p key="3" id="nom-random">
            {" "}
            {`${randomUser.data.firstname} ${randomUser.data.lastname}`} ?
          </p>

          <Card.Body className="rounded text-whit" id="accueil-wrapper">
            <div className="cadre-photo">
              <Card.Img className="card-photo" src={randomUser.data.photo} />
            </div>

            <Card.Text className="card-service" as="div">
              <strong>{randomUser.data.service}</strong>
            </Card.Text>
            <div className="main-content">
              <Card.Text className="card-content" as="div">
                <div class="center-image">
                  <img src="/src/assets/pin.png" />
                </div>
                {randomUser.data.city}
              </Card.Text>
              <Card.Text className="card-content" as="div">
                <div class="center-image">
                  <img src="/src/assets/email.png" />
                </div>
                {randomUser.data.email}
              </Card.Text>
              <Card.Text className="card-content" as="div">
                <div class="center-image">
                  <img src="/src/assets/smartphone.png" />
                </div>
                {randomUser.data.phone}
              </Card.Text>
              <Card.Text className="card-content" as="div">
                <div class="center-image">
                  <img src="/src/assets/cake.png" />
                </div>
                {randomUser.data.birthdate}
              </Card.Text>
            </div>
          </Card.Body>
          <button onClick={getRandom} id="button-random">
            UN AUTRE BONJOUR ?
          </button>
        </>
      ))}
    </div>
  );
};

export default Randomusercard;
