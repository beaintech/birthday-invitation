import React, { useState } from 'react';
import './FoodDetails.css';

function FoodDetails() {
  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="food-details-container">
      <button className="toggle-button" onClick={handleButtonClick}>
        {showDetails ? 'Click to Close the Food Menu' : 'Click to Open the Food Menu'}
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
            A rich and flavorful broth filled with a variety of fresh vegetables, thinly sliced meats, and seafood. Perfect for a communal dining experience.
          </p>
          <h2>🥟 Dim Sum</h2>
          <p>
            Delicate steamed dumplings, fluffy buns, and other bite-sized treats that are both savory and sweet. A true taste of traditional Asian cuisine.
          </p>
          <h2>🍜 Other Cuisine</h2>
          <p>
            A selection of other Asian dishes that will surprise and delight your taste buds, from stir-fries to noodles, each dish is crafted to perfection.
          </p>
        </div>
      )}
    </div>
  );
}

export default FoodDetails;
