import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/images/assets";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={assets.home} alt="" />
          <p>Home</p>
        </div>
        <div
          className={`side-link ${category === 1 ? "active" : ""}`}
          onClick={() => setCategory(1)}
        >
          <img src={assets.game_icon} alt="" />
          <p>Film</p>
        </div>
        <div
          className={`side-link ${category === 23 ? "active" : ""}`}
          onClick={() => setCategory(23)}
        >
          <img src={assets.automobiles} alt="" />
          <p>Comedy</p>
        </div>
        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <img src={assets.sports} alt="" />
          <p>Sports</p>
        </div>
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <img src={assets.entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <img src={assets.tech} alt="" />
          <p>Technology</p>
        </div>
        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={assets.music} alt="" />
          <p>Music</p>
        </div>
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <img src={assets.blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <img src={assets.news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscriptions</h3>
        <div className="side-link">
          <img src={assets.profile} alt="" />
          <p>Evangadi Tech</p>
        </div>
        <div className="side-link">
          <img src={assets.profile_ico} alt="" />
          <p>Javascript</p>
        </div>
        <div className="side-link">
          <img src={assets.profile} alt="" />
          <p>React js</p>
        </div>
        <div className="side-link">
          <img src={assets.profile_ico} alt="" />
          <p>API </p>
        </div>
        <div className="side-link">
          <img src={assets.profile} alt="" />
          <p>Database</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
