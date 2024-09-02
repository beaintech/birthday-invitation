import React, { useState } from 'react';
import './App.css';
import Entry from './Entry';
import FoodDetails from './FoodDetails';
import FoodDetailsGerman from './FoodDetailsGerman';

function App() {
  const [showInvitation, setShowInvitation] = useState(false);
  const [isGerman, setIsGerman] = useState(false);

  const toggleLanguage = () => {
    setIsGerman(!isGerman);
  };

  const handleEntryButtonClick = () => {
    setShowInvitation(true);
  };

  const handleBackButtonClick = () => {
    setShowInvitation(false);
  };

  return (
    <div className="App">
      {!showInvitation ? (
        <Entry onButtonClick={handleEntryButtonClick} />
      ) : (
        <header className="App-header">
          <button className="back-button" onClick={handleBackButtonClick}>
            Go Back to Video
          </button>
          <button className="language-toggle-button" onClick={toggleLanguage}>
            {isGerman ? 'Switch to English' : 'Zur deutschen Version wechseln'}
          </button>

          {!isGerman ? (
            <>
              <h1>🌟 Exclusive Invitation 🌟</h1>
              <p>Dear Friends,</p>
              <p>
              I’m turning 36 and would love for you to join me for a special day filled with delicious Asian cuisine. warm company, and unforgettable memories.
              </p>
              <p>
              Join me for a culinary journey where we'll savor dishes like rich and flavorful hotpot, delicate dim sum, and a few other surprises that will delight your palate.
              </p>
              <FoodDetails />

              <div className="details">
                <p><strong>📅 Date:</strong> 13.09.2024</p>
                <p><strong>🕒 Time:</strong> 15:00/3pm</p>
                <p><strong>📍 Location:</strong> Oststraße 39</p>
              </div>
              <p>
              This is a small, intimate affair, and I’d love to share this special day with you. Because I need to prepare food according to how many guests will come, <strong>please let me know if you will join by 12th September, 2 days in advance</strong>, so I can ensure everything is just perfect.
              </p>
              <p>Looking forward to a cozy evening together.</p>
              <p>Warmest regards,</p>
              <p><strong>Bea</strong></p>
                          </>
            ) : (
              <>
              <h1>🌟 Exklusive Einladung 🌟</h1>
              <p>Liebe/r Freundes,</p>
              <p>
              Ich werde 36 und würde mich freuen, wenn du an einem besonderen Tag mit leckerem asiatischem Essen teilnimmst, herzlicher Gesellschaft und unvergesslichen Erinnerungen.
              </p>
              <p>
              Begleite mich auf eine kulinarische Reise, bei der wir Gerichte wie reichhaltiges und geschmackvolles Hotpot, zarte Dim Sum und einige weitere Überraschungen genießen werden, die deinen Gaumen erfreuen werden.
              </p>
              <div className="details">
              <p><strong>📅 Datum:</strong> 14.09.2024</p>
            <p><strong>🕒 Zeit:</strong> 15:00/3pm</p>
            <p><strong>📍 Ort:</strong> Oststraße 39</p>
          </div>
          <p>
          Dies ist eine kleine, intime Veranstaltung, und ich würde mich freuen, diesen besonderen Tag mit dir zu teilen. Da ich das Essen nach der Anzahl der Gäste vorbereiten muss,<strong>gib mir bitte bis zum 12. September, 2 Tage im Voraus</strong>, Bescheid, ob du kommst, damit ich sicherstellen kann, dass alles perfekt ist.
          </p>
          <FoodDetailsGerman />

          <p>Ich freue mich auf einen gemütlichen Abend zusammen.</p>
          <p>Herzliche Grüße,</p>
          <p><strong>Bea</strong></p>
            </>
          )}
        </header>
      )}
    </div>
  );

}

export default App;
