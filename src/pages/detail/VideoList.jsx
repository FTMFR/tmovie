import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";

const VideoList = (props) => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const res = await tmdbApi.getVideos(category, props.id);
      setVideos(res.results.slice(0, 5));
    };

    getVideos();
  }, [category, props.id]);

  return (
    <>
      {videos.map((item, i) => (
        <Video key={i} item={item} />
      ))}
    </>
  );
};

const Video = (props) => {
  const item = props.item;
  const iframRef = useRef(null);

  useEffect(() => {
    const heigth = (iframRef.current.offsetWidth * 9) / 16 + "px";
    iframRef.current.setAttribute("height", heigth);
  }, []);

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`httpls://www.youtube.com/embed/${item.key}`}
        title="video"
        ref={iframRef}
        width="100%"
      ></iframe>
    </div>
  );
};

export default VideoList;
