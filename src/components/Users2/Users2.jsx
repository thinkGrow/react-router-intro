import React, { use } from "react";

const Users2 = ({ users2Promise }) => {
  const users2 = use(users2Promise);

  //   const users2 = users2Promise;
  return (
    <div>
      {users2.map((user) => (
        <p key={user.id}>{user.id}</p>
      ))}
    </div>
  );
};

export default Users2;
