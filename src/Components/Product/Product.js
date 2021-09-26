import React from 'react';

const Product = (props) => {
  const { name, age, height, location, cost, isAvailable, email, image } =
    props.model;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Product;
