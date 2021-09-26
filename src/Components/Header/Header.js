import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="row bg-light rounded-3 shadow-lg py-3 my-3">
      <div className="col-12">
        <h2 className="text-center fw-bold">Fair & Handsome</h2>
        <h4 className="text-center">Total Budget: $8000</h4>
      </div>
    </div>
  );
};

export default Header;
