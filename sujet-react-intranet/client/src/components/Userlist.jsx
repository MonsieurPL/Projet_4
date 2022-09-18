import axios from "axios";
import { Card, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./styles/Userlist.css";

const userlistcard = () => {
  const [userlist, setuserlist] = useState(null);
  const [userListSorted, setUserListSorted] = useState(null);

  const auth = localStorage.getItem("token");

  const getcollabuserlistData = async () => {
    const res = await axios.get(`http://localhost:8000/api/collaborateurs`, {
      headers: { Authorization: `bearer ${auth}` },
    });
    return res;
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getcollabuserlistData();
      setUserListSorted(data);
      setuserlist(data);
    };
    getData();
  }, []);

  const onSearch = (select) => {
    let temp = [];
    temp = userlist.data.filter((user) => {
      return user.service.includes(select);
    });
    setUserListSorted({ data: temp });
    console.log("data", temp);
  };
  return (
    <div className="card-userlist">
      <div className="select-service">
        <div class="center-list">
          <img src="/src/assets/list-logo.png" />

          <select
            onChange={(e) => {
              onSearch(e.target.value);
            }}
          >
            <option value="AUCUN">Aucun</option>
            <option value="Technique">Technique</option>
            <option value="Marketing">Marketing</option>
            <option value="Client">Client</option>
          </select>
        </div>
      </div>

      {userListSorted?.data.map((user) => {
        return (
          <>
            <Col xs={12} sm={4} className="col-cards">
              <Card.Body className="rounded text-whit" id="accueil-wrapper">
                <div className="cadre-photo">
                  <Card.Img className="card-photo" src={user.photo} />
                </div>
                <div className="main-content">
                  <Card.Text className="card-service-2" as="div">
                    {user.service}
                  </Card.Text>
                  <Card.Text className="card-name" as="div">
                    {`${user.firstname} ${user.lastname}`}
                  </Card.Text>

                  <Card.Text className="card-content" as="div">
                    <div class="center-image">
                      <img src="/src/assets/pin.png" />
                    </div>
                    {user.city}
                  </Card.Text>
                  <Card.Text className="card-content" as="div">
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
            </Col>
          </>
        );
      })}
    </div>
  );
};

export default userlistcard;
