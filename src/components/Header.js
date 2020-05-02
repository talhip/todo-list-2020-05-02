import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="container header">
      <div>
        <FontAwesomeIcon className="list" icon="list" size="lg" />
      </div>
      <div>To Do List</div>
    </div>
  );
};

export default Header;
