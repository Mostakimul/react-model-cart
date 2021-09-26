import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  // decalre a state
  const [models, setModels] = useState([]);

  // Fecth Models
  useEffect(() => {
    fetch('./db.json')
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
      });
  }, []);

  return (
    <div className="row g-2">
      {/* Products section */}
      <div className="col-8 bg-light rounded-3">
        {models.map((model) => (
          <Product></Product>
        ))}
      </div>
      {/* empty div */}
      <div className="col-1"></div>
      {/* Cart section */}
      <div className="col-3 bg-light rounded-3">Cart Section</div>
    </div>
  );
};

export default Products;
