import React, { useRef, useState } from 'react';

const VideoComponent = ({ src, poster}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <video
        ref={videoRef}
        className="video"
        poster={poster}
        muted
        onMouseEnter={playVideo} onMouseLeave={pauseVideo}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
