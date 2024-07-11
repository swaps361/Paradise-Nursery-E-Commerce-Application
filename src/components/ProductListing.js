import React from 'react';
import PlantCard from './PlantCard';
import './ProductListing.css';

const ProductListing = ({ plants }) => (
  <div className="product-listing">
    {plants.map(plant => (
      <PlantCard key={plant.id} plant={plant} />
    ))}
  </div>
);

export default ProductListing;
