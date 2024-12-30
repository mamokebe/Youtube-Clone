import React, { useState, useEffect } from "react";
import "./VideoList.css";
import { Link } from "react-router-dom";
import { value_converter } from "../../assets/data.js";
import moment from "moment";
import axios from "../../utils/axios.js";
import requests from "../../utils/requests.js";

const VideoList = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `${requests.fetchVideoList}videoCategoryId=${category}`;
    try {
      const res = await axios.get(videoList_url);
      setData(res.data.items);
    } catch (error) {
      console.log("data not found", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feeds">
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_converter(item.statistics.viewCount)} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default VideoList;
