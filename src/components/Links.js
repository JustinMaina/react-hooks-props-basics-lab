// Links.js
import React from "react";

function Links(props) {
  const { user } = props;

  // Check if user and user.links exist before accessing GitHub and LinkedIn URLs
  if (!user || !user.links) {
    return null; // Render nothing if user or user.links is undefined
  }

  return (
    <div>
      <h3>Links</h3>
      <a href={user.links.github}>{user.links.github}</a>
      <a href={user.links.linkedin}>{user.links.linkedin}</a>
    </div>
  );
}

export default Links;

