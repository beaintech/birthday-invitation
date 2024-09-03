import invitationVideo from './video.mp4';
import React, { useState, useEffect } from 'react';
import './Entry.css';

function Entry({ onButtonClick }) {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = document.getElementById('invitationVideo');
    video.play();

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const handlePlayButtonClick = () => {
    const video = document.getElementById('invitationVideo');
    video.play();
    setIsPlaying(true);
  };

  return (
    <div className="entry-container">
      <div className="video-wrapper">
        <video
          id="invitationVideo"
          className="cover-video"
          autoPlay
          muted
          playsInline
          onClick={handlePlayButtonClick}
        >
          <source src={invitationVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <button className="play-button" onClick={handlePlayButtonClick}>
            👑 Play
          </button>
        )}
      </div>
      <div className="details-below-video">
        <p><strong>📅 Date:</strong> 14.09.2024</p>
        <p><strong>🕒 Time:</strong> 16:00/4pm</p>
        <p><strong>📍 Location:</strong> Oststraße 39, 40211</p>
      </div>
      <button className="entry-button" onClick={onButtonClick}>
        Enter Invitation
      </button>
    </div>
  );
}

export default Entry;
