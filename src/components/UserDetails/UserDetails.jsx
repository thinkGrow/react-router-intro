import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>{website}</p>
    </div>
  );
};

export default UserDetails;
