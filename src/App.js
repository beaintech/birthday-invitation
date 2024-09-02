import React, { useState } from 'react';
import './App.css';
import Entry from './Entry';
import FoodDetails from './FoodDetails';
import FoodDetailsGerman from './FoodDetailsGerman';

function App() {
  const [showInvitation, setShowInvitation] = useState(false);

  const handleEntryButtonClick = () => {
    setShowInvitation(true);
  };

  return (
    <div className="App">
      {!showInvitation ? (
        <Entry onButtonClick={handleEntryButtonClick} />
      ) : (
        <header className="App-header">
          <h1>🌟 Exclusive Invitation 🌟</h1>
          <p>Dear [Friend's Name],</p>
          <p>
            As I turn 36 this year, I wanted to celebrate in a special way—by hosting a private dinner party filled with some of the finest Asian cuisine. This won't be just any gathering; it's going to be an evening of great food, warm company, and unforgettable memories.
          </p>
          <p>
            Join me for a culinary journey where we'll savor dishes like rich and flavorful hotpot, delicate dim sum, and a few other surprises that will delight your palate.
          </p>
          <FoodDetails />

          <div className="details">
            <p><strong>📅 Date:</strong> [Insert Date]</p>
            <p><strong>🕒 Time:</strong> [Insert Time]</p>
            <p><strong>📍 Location:</strong> [Insert Venue/Address]</p>
          </div>
          <p>
            This is a small, intimate affair, and I’d love to share this special night with you. Because I need to prepare food according to how many guests will come, please let me know if you will join by 13th September, 2 days in advance, so I can ensure everything is just perfect.
          </p>
          <p>Looking forward to a cozy evening together.</p>
          <p>Warmest regards,</p>
          <p><strong>[Your Name]</strong></p>


          <h1>🌟 Exklusive Einladung 🌟</h1>
          <p>Liebe/r [Name des Freundes],</p>
          <p>
            Da ich dieses Jahr 36 werde, möchte ich das auf eine besondere Weise feiern—mit einer privaten Dinnerparty, die mit einigen der besten asiatischen Köstlichkeiten gefüllt ist. Dies wird kein gewöhnliches Treffen sein; es wird ein Abend mit großartigem Essen, herzlicher Gesellschaft und unvergesslichen Erinnerungen.
          </p>
          <p>
            Begleite mich auf eine kulinarische Reise, bei der wir Gerichte wie reichhaltiges und geschmackvolles Hotpot, zarte Dim Sum und einige weitere Überraschungen genießen werden, die deinen Gaumen erfreuen werden.
          </p>
          <div className="details">
            <p><strong>📅 Datum:</strong> [Datum einfügen]</p>
            <p><strong>🕒 Zeit:</strong> [Zeit einfügen]</p>
            <p><strong>📍 Ort:</strong> [Ort/Adresse einfügen]</p>
          </div>
          <p>
            Dies ist eine kleine, intime Veranstaltung, und ich würde mich freuen, diesen besonderen Abend mit dir zu teilen. Da ich das Essen nach der Anzahl der Gäste vorbereiten muss, gib mir bitte bis zum 13. September, 2 Tage im Voraus, Bescheid, ob du kommst, damit ich sicherstellen kann, dass alles perfekt ist.
          </p>
          <FoodDetailsGerman />

          <p>Ich freue mich auf einen gemütlichen Abend zusammen.</p>
          <p>Herzliche Grüße,</p>
          <p><strong>[Dein Name]</strong></p>

        </header>
      )}
    </div>
  );
}

export default App;
