

import React from 'react';

function StudentSection({ laptop }) {
  if (!laptop) {
    return <p>No laptop data available.</p>;
  }

  return (
    <div className="laptop-card">
      <h2>{laptop.name}</h2>
      <p><strong>Processor:</strong> {laptop.processor}</p>
      <p><strong>RAM:</strong> {laptop.ram}</p>
      <p><strong>Screen Size:</strong> {laptop.screenSize}</p>
      <p><strong>Storage:</strong> {laptop.storage}</p>
      {laptop.features && <p><strong>Features:</strong> {laptop.features}</p>}
      <p><strong>Graphics:</strong> {laptop.graphics}</p>
      <p><strong>Price:</strong> {laptop.price}</p>
    </div>
  );
}



export default StudentSection;