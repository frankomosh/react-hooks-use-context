import React from "react";
import { useContext } from "react/cjs/react.production.min";
//import the user context we created
import { UserContext } from "../context/user";
import Interests from "./Interests";

function Profile({ theme }) {
  //call UserContext with our UserContext
  const user = useContext(UserContext);

  console.log(user);
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}
export default Profile;