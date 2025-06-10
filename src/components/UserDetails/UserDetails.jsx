import React from "react";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;

  const navigate = useNavigate();

  return (
    <div>
      <h3>Name: {name}</h3>
      <p>{website}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default UserDetails;
