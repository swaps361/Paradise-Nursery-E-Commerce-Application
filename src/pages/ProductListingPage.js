import React from 'react';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import figImage from '../assets/images/fig.jpg';
import snakeImage from '../assets/images/snake.jpg';
import peaceImage from '../assets/images/peace.jpg';
import aloeImage from '../assets/images/aloe.jpg';
import spiderImage from '../assets/images/spider.jpg';
import succulentImage from '../assets/images/succulent.jpg';
import monsteraImage from '../assets/images/monstera.jpg';
import pothosImage from '../assets/images/pothos.jpg';
import rubberPlantImage from '../assets/images/rubber-plant.jpg';
import bambooImage from '../assets/images/bamboo.jpg'; // Import additional image for the 10th plant

const ProductListingPage = () => {
  const plants = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 120.00, image: figImage },
    { id: 2, name: 'Snake Plant', price: 115.00, image: snakeImage },
    { id: 3, name: 'Peace Lily', price: 112.00, image: peaceImage },
    { id: 4, name: 'Aloe Vera', price: 110.00, image: aloeImage },
    { id: 5, name: 'Spider Plant', price: 118.00, image: spiderImage },
    { id: 6, name: 'Succulent', price: 125.00, image: succulentImage },
    { id: 7, name: 'Monstera', price: 225.00, image: monsteraImage },
    { id: 8, name: 'Pothos', price: 108.00, image: pothosImage },
    { id: 9, name: 'Rubber Plant', price: 220.00, image: rubberPlantImage },
    { id: 10, name: 'Lucky Bamboo', price: 300.00, image: bambooImage },
  ];

  return (
    <>
      <Header />
      <ProductListing plants={plants} />
    </>
  );
};

export default ProductListingPage;
