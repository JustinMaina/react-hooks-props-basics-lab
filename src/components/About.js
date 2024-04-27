// About.js
import React from "react";
import Links from "./Links.js";

function About({ user }) {
  if (!user) {
    return <div>Loading...</div>; // Or any other placeholder you prefer
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {user.bio && <p>{user.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links user={user} />
    </div>
  );
}
export default About;
