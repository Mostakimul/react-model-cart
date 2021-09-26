import React from 'react';

const Product = (props) => {
  // destructuring props
  const { name, age, height, location, cost, isAvailable, email, image } =
    props.model;
  return (
    <div className="col">
      <div className="card h-100 shadow">
        <img src={image} className="card-img-top" height="300px" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Height: {height}</p>
          <p className="card-text">Location: {location}</p>
          <p className="card-text">Cost: ${cost}/hour</p>
          <p className="card-text">Available: {isAvailable}</p>
          <p className="card-text">Email: {email}</p>
        </div>
        <div className="card-footer d-grid mx-auto col-12">
          <button className="btn btn-dark">Hire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
