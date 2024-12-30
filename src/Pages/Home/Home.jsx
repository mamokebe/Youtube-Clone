import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import VideoList from "../../Components/VideoList/VideoList";
import LowerHeader from "../../Components/Header/LowerHeader";

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <LowerHeader />
        <VideoList category={category} />
      </div>
    </>
  );
};

export default Home;
