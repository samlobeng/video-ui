import React from "react";
import ReactPlayer from "react-player/lazy";
import AddComment from "../Comments/AddComment";
import initialVideos from '../../Data/videos.json'
const Video = ({ video, searchedVideo }) => {
    console.log("hhhh", {searchedVideo});
  return (
    <div className="container">
      {
      
      searchedVideo ? (
        <ReactPlayer
          width={320}
          height={250}
          controls={true}
          url={searchedVideo.url}
        />
       
      ) : ( initialVideos.map((iv)=>(
          <ReactPlayer width={320} height={250} controls={true} url={iv.url} />

      ))
      )}
       <AddComment />
    </div>
  );
};

export default Video;
