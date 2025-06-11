import React, { Suspense, useState } from "react";
import { Link, useNavigate } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { id, name, email, phone } = user;

  const userPromse2 = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (res) => res.json()
  );

//   const users2Promise = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/users/${id}`);
  };

  const userStyle = {
    border: "2px solid yellow",
    borderRadius: "20px",
    padding: "10px",
    marging: "10px",
  };

  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>{email} </p>
      <p>
        <small>{phone}</small>
      </p>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button onClick={handleNavigate}>Details using navigate</button>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} Info
      </button>
      {showInfo && (
        <Suspense fallback={<span>Loadidng..</span>}>
          <UserDetails2 userPromse2={userPromse2}></UserDetails2>
        </Suspense>
      )}
    </div>
  );
};

export default User;
