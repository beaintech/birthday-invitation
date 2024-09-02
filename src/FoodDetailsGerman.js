import React, { useState } from 'react';
import './FoodDetails.css'; 

function FoodDetailsGerman() {
  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="food-details-container">
      <button className="toggle-button" onClick={handleButtonClick}>
        {showDetails ? 'Klicken, um das Menü zu schließen' : 'Klicken, um das Menü zu öffnen'}
        {!showDetails && (
        <span className="arrow-animation">
          <span className="down-arrow">👇</span>
        </span>
      )}
      </button>
      {showDetails && (
        <div className="food-details">
          <h2>🍲 Hotpot</h2>
          <p>
            Eine reichhaltige und geschmackvolle Brühe, gefüllt mit einer Vielzahl von frischem Gemüse, dünn geschnittenem Fleisch und Meeresfrüchten. Perfekt für ein gemeinschaftliches Esserlebnis.
          </p>
          <h2>🥟 Dim Sum</h2>
          <p>
            Zarte gedämpfte Knödel, fluffige Brötchen und andere kleine Leckereien, die sowohl herzhaft als auch süß sind. Ein echter Geschmack der traditionellen asiatischen Küche.
          </p>
          <h2>🍜 Weitere Gerichte</h2>
          <p>
            Eine Auswahl an weiteren asiatischen Gerichten, die deinen Gaumen überraschen und erfreuen werden, von Pfannengerichten bis zu Nudeln, jedes Gericht ist perfekt zubereitet.
          </p>
        </div>
      )}
    </div>
  );
}

export default FoodDetailsGerman;
