import React, { useState } from "react";
import "./styles/Login.css";
import { useDispatch } from "react-redux";
import { userInfo } from "../redux/reducers/Userreducer";

async function loginUser(credentials) {
  let response = await fetch("http://localhost:8000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (response.status == 200) {
    let data = await response.json();
    console.log(data);
    console.log(data.token);

    return data;
  }
  //   .then((data) => {
  //   let res = data.json();
  //   console.log(res);
  //   console.log(res.token);

  //  })
}

export default function postLogin() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email: email,
      password: password,
    });
    localStorage.setItem("token", token.token);
    console.log(token.user);

    dispatch(userInfo(token.user));

    sessionStorage.setItem("user", JSON.stringify(token.user));

    window.location.href = "/accueil";
  };

  //const handleLinkClick = async e => {
  // console.log('Link clicked');
  //  e.preventDefault();
  //  window.location.href= "/accueil";
  // 👇️ refers to the link element
  //  console.log(e.currentTarget); }
  // Le reducer

  return (
    <div id="back-login">
      <div className="login-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="93.375"
          height="135.461"
          viewBox="0 0 93.375 135.461"
          id="logo-intra"
        >
          <g transform="translate(-913 -279.539)">
            <g transform="translate(-1117 -153.278)">
              <circle
                cx="46.68"
                cy="46.68"
                r="46.68"
                transform="translate(2030 436.79)"
                fill="#fff"
              />
              <path
                d="M46.68,2A44.692,44.692,0,0,0,29.289,87.85,44.692,44.692,0,0,0,64.071,5.51,44.4,44.4,0,0,0,46.68,2m0-2A46.68,46.68,0,1,1,0,46.68,46.68,46.68,0,0,1,46.68,0Z"
                transform="translate(2030 436.79)"
              />
              <path
                d="M56.719,17.044A38.384,38.384,0,0,0,99.675,75.411,46.721,46.721,0,0,0,56.719,17.044Z"
                transform="translate(2022.21 419.788)"
                fill="#fff"
              />
              <path
                d="M57.748,19.109a36.385,36.385,0,0,0,40.26,54.7,44.74,44.74,0,0,0-24.748-50.7,44.277,44.277,0,0,0-15.512-4.009m-1.029-2.065A46.721,46.721,0,0,1,99.675,75.411,38.376,38.376,0,0,1,56.719,17.044Z"
                transform="translate(2022.21 419.788)"
              />
              <path
                d="M105.044,63.248A38.377,38.377,0,0,0,36.4,96.762a46.691,46.691,0,0,0,68.639-33.514Z"
                transform="translate(2017.745 427.59)"
                fill="#fff"
              />
              <path
                d="M72.373,47A36.389,36.389,0,0,0,38.027,95.366a44.694,44.694,0,0,0,64.918-31.7A36.644,36.644,0,0,0,90.362,51.756,36.178,36.178,0,0,0,72.373,47m0-2a38.343,38.343,0,0,1,32.671,18.248A46.691,46.691,0,0,1,36.4,96.762,38.388,38.388,0,0,1,72.373,45Z"
                transform="translate(2017.745 427.59)"
              />
              <path
                d="M86.893,28.574a38.372,38.372,0,0,0-9.923,71.835,46.677,46.677,0,0,0,9.923-71.835Z"
                transform="translate(2023.885 423.006)"
                fill="#fff"
              />
              <path
                d="M86.189,30.769a36.066,36.066,0,0,0-10.522,4.248A36.366,36.366,0,0,0,76.888,98.1,44.986,44.986,0,0,0,91.559,82.718a44.686,44.686,0,0,0-5.37-51.949m.7-2.2a46.677,46.677,0,0,1-9.923,71.835,38.372,38.372,0,0,1,9.923-71.835Z"
                transform="translate(2023.885 423.006)"
              />
              <ellipse
                cx="3.642"
                cy="3.973"
                rx="3.642"
                ry="3.973"
                transform="translate(2072.376 471.221)"
                fill="#fff"
              />
              <path
                d="M3.642,2A1.832,1.832,0,0,0,2,3.973,1.832,1.832,0,0,0,3.642,5.946,1.832,1.832,0,0,0,5.283,3.973,1.832,1.832,0,0,0,3.642,2m0-2A3.818,3.818,0,0,1,7.283,3.973,3.818,3.818,0,0,1,3.642,7.946,3.818,3.818,0,0,1,0,3.973,3.818,3.818,0,0,1,3.642,0Z"
                transform="translate(2072.376 471.221)"
              />
              <ellipse
                cx="3.642"
                cy="3.973"
                rx="3.642"
                ry="3.973"
                transform="translate(2075.025 432.817)"
                fill="#fff"
              />
              <path
                d="M3.642,2A1.832,1.832,0,0,0,2,3.973,1.832,1.832,0,0,0,3.642,5.946,1.832,1.832,0,0,0,5.283,3.973,1.832,1.832,0,0,0,3.642,2m0-2A3.818,3.818,0,0,1,7.283,3.973,3.818,3.818,0,0,1,3.642,7.946,3.818,3.818,0,0,1,0,3.973,3.818,3.818,0,0,1,3.642,0Z"
                transform="translate(2075.025 432.817)"
              />
              <ellipse
                cx="3.642"
                cy="3.973"
                rx="3.642"
                ry="3.973"
                transform="translate(2106.807 448.046)"
                fill="#fff"
              />
              <path
                d="M3.642,2A1.832,1.832,0,0,0,2,3.973,1.832,1.832,0,0,0,3.642,5.946,1.832,1.832,0,0,0,5.283,3.973,1.832,1.832,0,0,0,3.642,2m0-2A3.818,3.818,0,0,1,7.283,3.973,3.818,3.818,0,0,1,3.642,7.946,3.818,3.818,0,0,1,0,3.973,3.818,3.818,0,0,1,3.642,0Z"
                transform="translate(2106.807 448.046)"
              />
              <ellipse
                cx="3.973"
                cy="3.642"
                rx="3.973"
                ry="3.642"
                transform="translate(2096.213 518.894)"
                fill="#fff"
              />
              <path
                d="M3.973,2A1.832,1.832,0,0,0,2,3.642,1.832,1.832,0,0,0,3.973,5.283,1.832,1.832,0,0,0,5.946,3.642,1.832,1.832,0,0,0,3.973,2m0-2A3.818,3.818,0,0,1,7.946,3.642,3.818,3.818,0,0,1,3.973,7.283,3.818,3.818,0,0,1,0,3.642,3.818,3.818,0,0,1,3.973,0Z"
                transform="translate(2096.213 518.894)"
              />
              <circle
                cx="3.642"
                cy="3.642"
                r="3.642"
                transform="translate(2050.526 520.218)"
                fill="#fff"
              />
              <path
                d="M3.642,2A1.642,1.642,0,1,0,5.283,3.642,1.644,1.644,0,0,0,3.642,2m0-2A3.642,3.642,0,1,1,0,3.642,3.642,3.642,0,0,1,3.642,0Z"
                transform="translate(2050.526 520.218)"
              />
            </g>
            <text
              transform="translate(927 408)"
              fontSize="20"
              fontFamily="Avenir-Light, Avenir"
              fontWeight="300"
              letterSpacing="0.1em"
            >
              <tspan x="0" y="0">
                INTRA
              </tspan>
            </text>
          </g>
        </svg>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Adresse email"
            className="input-login"
            required
          />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            className="input-login"
            required
          />

          <div>
            <button type="submit" id="btn-connexion" href="src/pages/:accueil">
              {" "}
              Connexion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
