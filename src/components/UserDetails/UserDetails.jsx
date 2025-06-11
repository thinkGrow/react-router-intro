import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;

  const navigate = useNavigate();

  // const params = useParams();
  // console.log(params.userId);

  // const { userId } = useParams();
  // console.log(userId);
  
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>{website}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default UserDetails;
