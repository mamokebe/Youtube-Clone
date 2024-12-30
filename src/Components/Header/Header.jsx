import React from "react";
import "./Header.css";
import { assets } from "../../assets/images/assets";
import { Link } from "react-router-dom";

const Header = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={assets.menu_icon}
          alt=""
        />
        <Link to="/">
          <img className="logo" src={assets.logo} alt="" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <div className="search-button">
            <img src={assets.search_icon} alt="" />
            <div className="tooltip">search</div>
          </div>
        </div>
        <div className="voice-search-button">
          <img className="voice-search-icon" src={assets.voice_search_icon} />
          <div className="tooltip">search with your voice</div>
        </div>
      </div>
      <div className="nav-right flex-div">
        <div className="upload-icon-container">
          <img src={assets.upload_icon} alt="" />
          <div className="tooltip">Create</div>
        </div>
        {/* <div className="youtube-app-icon-container">
          <img src={assets.more_icon} alt="" />
          <div className="tooltip">Youtube apps</div>
        </div> */}
        <div className="notifications-container">
          <div className="notifications-icon-container">
            <img src={assets.notification_icon} alt="" />
            <div className="notifications-count">2</div>
            <div className="tooltip">notifications</div>
          </div>
        </div>
        <img src={assets.profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Header;
