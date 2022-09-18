import React from "react";
import axios from "axios";
//import getToken from '../components/useToken';
import { useSelector } from "react-redux";
import Randomusercard from "../components/Randomusercard";
import Header from "../components/header";

const Accueil = () => {
  const auth = localStorage.getItem("token");

  var config = {
    method: "get",
    url: "http://localhost:8000/api/collaborateurs",
    headers: {
      Authorization: `bearer ${auth}`,
      "Content-Type": "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  const user = useSelector((state) => state.user.value);

  return (
    <div key="14" id="back-accueil">
      <Header key="15" />
      <h1 key="12" id="bienvenue">
        Bienvenue sur <span>INTRA</span>
      </h1>
      <p key="13" id="intro">
        La solution qui permet de souder les équipes
      </p>

      <Randomusercard key="16" />
    </div>
  );
};

export default Accueil;
