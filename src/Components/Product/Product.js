import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { FcAddressBook } from 'react-icons/fc';

const Product = (props) => {
  // console.log(props.handleAddToCart);
  // destructuring props
  const { name, age, height, location, cost, isAvailable, email, image } =
    props.model;
  return (
    <div className="col">
      <div className="card h-100 shadow">
        <img src={image} className="card-img-top" height="300px" alt={name} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text d-flex justify-content-between">
            <span>Age: {age}</span> <span>Height: {height}</span>
          </p>
          <p className="card-text">Location: {location}</p>
          <p className="card-text">
            Cost: <span className="fw-bold">${cost}/hour</span>
          </p>
          <p className="card-text">
            Available: {isAvailable ? <FaCheckCircle /> : <FaTimesCircle />}
          </p>
          <p className="card-text">
            <FcAddressBook /> {email}
          </p>
        </div>
        <div className="card-footer d-grid mx-auto col-12">
          <button
            className="btn btn-dark"
            onClick={() => props.handleAddToCart(props.model)}
          >
            Hire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
