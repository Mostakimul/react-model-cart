import React from 'react';

const Name = (props) => {
  const { name, image } = props.model;
  return (
    <div className="d-flex justify-content-between align-items-center shadow mt-2 p-2">
      <img src={image} alt="name" width="50px" />
      <p>{name}</p>
    </div>
  );
};

export default Name;
