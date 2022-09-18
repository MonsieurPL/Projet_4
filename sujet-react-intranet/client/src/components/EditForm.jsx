import React, { useState, useEffect } from "react";
import Input from "./Input";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";
import "./styles/Editform.css";

const auth = localStorage.getItem("token");

const INITIAL_STATE = JSON.stringify({
  id: 0,
  gender: "",
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  birthdate: "",
  country: "",
  photo: "",
  service: "",
});

axios.defaults.headers.common = { Authorization: `Bearer ${auth}` };

export default function Editform() {
  const auth = localStorage.getItem("token");

  const [user, setUser] = useState(INITIAL_STATE);

  useEffect(() => {
    (async () => {
      try {
        const user = await axios.get(
          "http://localhost:8000/api/collaborateurs/1",
          {
            headers: {
              Authorization: `bearer ${auth}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUser(user.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleInput = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data for update : ", user);
    try {
      console.log("Data for update : ", user);
      const response = await axios.put(
        `http://localhost:8000/api/collaborateurs/${user.id}`,
        user
      );
    } catch (error) {
      console.log(error);
    }
  };
  //       try {
  //   var config = {
  //     method: 'put',
  //     url: `http://localhost:8000/api/collaborateurs/${user.id}`,
  //     headers: {
  //       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJnZW5kZXIiOiJtYWxlIiwiZmlyc3RuYW1lIjoiT3dlbiIsImxhc3RuYW1lIjoiTG9wZXoiLCJlbWFpbCI6Im93ZW4ubG9wZXpAZXhhbXBsZS5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRJRXhRQlhFWlZpZnZmRU9XdldzbU8uNC5Pb2NOYjd6UXp1clFlcndPUWgxdFp4LzNva1NwLiIsInBob25lIjoiMDItMzctNzktNzgtMzkiLCJiaXJ0aGRhdGUiOiIxOTkyLTEyLTI2IiwiY2l0eSI6IlZpbGxldXJiYW5uZSIsImNvdW50cnkiOiJGcmFuY2UiLCJwaG90byI6Imh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi80MC5qcGciLCJzZXJ2aWNlIjoiTWFya2V0aW5nIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY2MzA2OTYyOX0.ycCA1gmJGlQLdjnZ3rtWBiN3VBcobY_G1hWctgyfjDQ',
  //       'Content-Type': 'application/json',
  //     },
  //     user : user,
  //   };

  //   axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.user));
  //   })
  //  } catch(error) {
  //     console.log(error);
  //   };}

  return (
    <div className="settings-container">
      <Row>
        <Col className="col-cards-settings" id="edit-settings">
          <Card.Body className="rounded text-whit settings">
            <form onSubmit={handleSubmit}>
              <Input
                name="gender"
                type="text"
                value={user.gender}
                placeholder={"Your gender"}
                handleInput={handleInput}
              />
              <br />
              <Input
                name="firstname"
                type="text"
                value={user.firstname}
                placeholder={"Your firstname"}
                handleInput={handleInput}
              />
              <br />
              <Input
                name="lastname"
                type="text"
                value={user.lastname}
                placeholder={"Your lastname"}
                handleInput={handleInput}
              />
              <br />
              <Input
                name="email"
                type="text"
                value={user.email}
                placeholder={"Your email"}
                handleInput={handleInput}
              />
              <br />
              <Input
                name="phone"
                type="text"
                value={user.phone}
                placeholder={"Your phone"}
                handleInput={handleInput}
              />
              <br />
              <Input
                name="birthdate"
                type="text"
                value={user.birthdate}
                placeholder={"Your birthdate"}
                handleInput={handleInput}
              />
              <br />
              <Input
                name="country"
                type="text"
                value={user.country}
                placeholder={"Your country"}
                handleInput={handleInput}
              />{" "}
              <br />
              <Input
                name="photo"
                type="text"
                value={user.photo}
                placeholder={"Your photo"}
                handleInput={handleInput}
              />
              <br />
              <Input
                name="service"
                type="text"
                value={user.service}
                placeholder={"Your service"}
                handleInput={handleInput}
              />
              <br />
              <button type="submit" id="button-edit">
                {" "}
                ENVOYER{" "}
              </button>
            </form>
          </Card.Body>
        </Col>
        <Col className="col-cards-settings" id="edit-profil">
          <Card.Body className="rounded text-whit settings" id="snd-card">
            <div className="cadre-photo">
              <Card.Img className="card-photo" src={user.photo} />
            </div>

            <Card.Text className="card-service" as="div">
              <strong>{user.service}</strong>
            </Card.Text>
            <div className="main-content">
              <Card.Text className="card-content" as="div">
                <div class="center-image">
                  <img src="/src/assets/user.png" />
                </div>
                {user.firstname} {user.lastname}
              </Card.Text>
              <Card.Text className="card-content" as="div">
                <div class="center-image">
                  <img src="/src/assets/gender.png" />
                </div>
                {user.gender}
              </Card.Text>
              <Card.Text className="card-content" as="div">
                <div class="center-image">
                  <img src="/src/assets/pin.png" />
                </div>
                {user.city}, {user.country}
              </Card.Text>
              <Card.Text
                className="card-content"
                as="div"
                href="mailto: abc@example.com"
                type="email"
              >
                <div class="center-image">
                  <img src="/src/assets/email.png" />
                </div>
                {user.email}
              </Card.Text>
              <Card.Text className="card-content" as="div">
                <div class="center-image">
                  <img src="/src/assets/smartphone.png" />
                </div>
                {user.phone}
              </Card.Text>
              <Card.Text className="card-content" as="div">
                <div class="center-image">
                  <img src="/src/assets/cake.png" />
                </div>
                {user.birthdate}
              </Card.Text>
            </div>
          </Card.Body>

          <form onSubmit={handleSubmit} id="form-mdp">
            <br />
            <Input
              name="password"
              type="password"
              value={user.password}
              placeholder={"Nouveau mot de passe"}
              handleInput={handleInput}
            />
            <br />{" "}
            <input name="password" type="password" placeholder={"Confimer"} />
            <br />
            <button type="submit" id="button-edit">
              {" "}
              MODIFIER{" "}
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
}
