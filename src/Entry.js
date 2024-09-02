import invitationVideo from './bea Birthday.mp4';
import React from 'react';
import './Entry.css';

function Entry({ onButtonClick }) {
  return (
    <div className="entry-container">
      <div className="video-wrapper">
      <video className="cover-video" autoPlay loop muted>
          <source src={invitationVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="entry-button" onClick={onButtonClick}>
        Click to Enter Invitation
      </button>
    </div>
  );
}

export default Entry;
