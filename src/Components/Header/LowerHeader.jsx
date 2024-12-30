import React from "react";
import "./Header.css";

const LowerHeader = () => {
  return (
    <div className="lower__container">
      <ul>
        <li>
          <button>All</button>
        </li>
        <li>
          <button>Music</button>
        </li>
        <li>
          <button>JavaScript</button>
        </li>
        <li>
          <button>Live</button>
        </li>
        <li>
          <button>News</button>
        </li>
        <li>
          <button>Comedy</button>
        </li>
        <li>
          <button>Mixes</button>
        </li>
        <li>
          <button>Dramedy</button>
        </li>
        <li>
          <button>Information</button>
        </li>
        <li>
          <button>Watched</button>
        </li>
        <li>
          <button>Public speaking</button>
        </li>
      </ul>
    </div>
  );
};

export default LowerHeader;
