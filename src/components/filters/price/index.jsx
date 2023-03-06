import React, { useState } from "react";

function PriceFilter({ prices }) {
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handlePriceChange = (event) => {
    const priceId = parseInt(event.target.value);
    const selectedPrice = prices.find((price) => price.id === priceId);
    setSelectedPrice(selectedPrice);
  };

  return (
    <div>
      <label htmlFor="price-select">Select price range:</label>
      <select id="price-select" onChange={handlePriceChange}>
        <option value="">All prices</option>
        {prices.map((price) => (
          <option key={price.id} value={price.id}>
            {price.range}
          </option>
        ))}
      </select>
      {selectedPrice && (
        <p>You have selected {selectedPrice.range} price range.</p>
      )}
    </div>
  );
}

export default PriceFilter;
