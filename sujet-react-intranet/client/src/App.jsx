import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Accueil from "./pages/Accueil";
import Userlistpage from "./pages/Utilisateurs/";
import PageEdition from "./pages/Edition/";

function getToken() {
  let tokenString = localStorage.getItem("token");
  if (!tokenString) {
    tokenString = "";
  }
  return tokenString;
}

function saveToken(userToken) {
  localStorage.setItem("token", JSON.stringify(userToken.token));
}

export function logOut() {
  localStorage.clear();
  sessionStorage.clear();
  window.location = "/";
  console.log(logOut);
}

function App() {
  const token = getToken();

  if (token == "") {
    return <Login saveToken={saveToken} />;
  }

  return (
    <div className="wrapper" key="17">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/:Acceuil" element={<Accueil />} />
          <Route path="/Utilisateurs" element={<Userlistpage />} />
          <Route path="/Edition" element={<PageEdition />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
