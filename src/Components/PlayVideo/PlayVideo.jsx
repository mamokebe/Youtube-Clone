import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import { assets } from "../../assets/images/assets";
import moment from "moment";
import { value_converter } from "../../assets/data.js";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios.js";
import requests from "../../utils/requests.js";

const PlayVideo = () => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const { videoId } = useParams();

  const fetchVideoData = async () => {
    //fetching Videos Data
    const videoDetails_url = `${requests.fetchVideoDetails}id=${videoId}`;
    try {
      const res = await axios.get(videoDetails_url);
      console.log(res.data);
      setApiData(res.data.items[0]);
    } catch (error) {
      console.log("data not found", error);
    }
  };
  console.log(apiData);
  const fetchOtherData = async () => {
    //fetching channel data
    const channelData_url = `${requests.fetchChannelData}id=${apiData.snippet.channelId}`;
    try {
      const res = await axios.get(channelData_url);
      // const data = await resp.json();
      setChannelData(res.data.items[0]);
    } catch (error) {
      console.log("data not found", error);
    }
    //fetching comment data
    const comment_url = `${requests.fetchComment}videoId=${videoId}`;
    try {
      const res = await axios.get(comment_url);
      // const data = await response.json();
      setCommentData(res.data.items);
    } catch (error) {
      console.log("data not found", error);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video">
      {/*<video src={video1} controls autoPlay muted></video>*/}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "11K"}{" "}
          Views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={assets.like} alt="" />
            {apiData ? value_converter(apiData.statistics.likeCount) : 115}
          </span>
          <span>
            <img src={assets.dislike} alt="" />
          </span>
          <span>
            <img src={assets.share} alt="" />
            share
          </span>
          <span>
            <img src={assets.save} alt="" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "2M"}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description here"}
        </p>

        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : 112}{" "}
          Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>
                    {moment(
                      item.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow()}
                  </span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={assets.like} alt="" />
                  <span>
                    {value_converter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={assets.dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PlayVideo;
