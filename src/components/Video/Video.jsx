import React, { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import AddComment from '../Comments/AddComment'
const Video = ({video}) => {
const [isLoading, setIsLoading] = useState(false)
    

  return (
      <div className="container">
          <ReactPlayer width={320} height ={250} controls={true} url={video.url}/>
          <AddComment videos = {video}/>
      </div>
  )
}

export default Video