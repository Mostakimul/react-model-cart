import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
  // decalre a state
  const [models, setModels] = useState([]);
  const [cartModels, setCartModels] = useState([]);

  // Fecth Models
  useEffect(() => {
    fetch('./db.json')
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
      });
  }, []);

  // function for click
  const handleAddToCart = (model) => {
    let allCarts = [...cartModels, model];
    setCartModels(allCarts);
  };

  return (
    <div className="row g-2 mb-5">
      {/* Products section */}
      <div className="col-12 col-md-8 order-last order-md-first bg-light rounded-3 pb-3 mt-3">
        <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
          {models.map((model) => (
            <Product
              key={model.id}
              model={model}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
      </div>
      {/* empty div */}
      <div className="col-md-1"></div>
      {/* Cart section */}
      <div className="col-12 col-md-3 order-first order-md-last rounded-3">
        <Cart cartModels={cartModels}></Cart>
      </div>
    </div>
  );
};

export default Products;
