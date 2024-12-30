import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { value_converter } from "../../assets/data";
import { Link } from "react-router-dom";
import axios from "../../utils/axios.js";
import requests from "../../utils/requests.js";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `${requests.fetchRelatedVideo}videoCategoryId=${categoryId}`;
    try {
      const res = await axios.get(relatedVideo_url);
      setApiData(res.data.items);
    } catch (error) {
      console.log("data not found", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData?.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="side-video-list"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
