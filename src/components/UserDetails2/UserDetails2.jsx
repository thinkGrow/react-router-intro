import React, { use } from "react";

const UserDetails = ({userPromse2}) => {
  const { name, username } = use(userPromse2);
  return (
    <div>
      <p>
        <small>user: {username}</small>
      </p>
      <p>{name}</p>
    </div>
  );
};

export default UserDetails;
