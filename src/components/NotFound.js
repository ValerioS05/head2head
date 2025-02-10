import React from "react";
import NoResults from "../assets/nores.jpg.jpg";
import Asset from "./Asset";
// 404 page
const NotFound = () => {
  return (
    <div>
      <Asset
        src={NoResults}
        message="The page you are looking for doesn't exist!"
      />
    </div>
  );
};

export default NotFound;
