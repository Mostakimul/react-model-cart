import React from 'react';
import Name from '../CartName/CartName';

const Cart = (props) => {
  // console.log(props.cartModels);
  let allModels = [];
  let totalCost = 0;
  // loop props for adding into array
  for (const cartModel of props.cartModels) {
    if (!allModels.includes(cartModel)) {
      allModels.push(cartModel);
    }
  }

  // cost calculation
  allModels.forEach((model) => {
    totalCost = totalCost + model.cost;
  });
  return (
    <div className="card border-0 p-2 shadow sticky-top mt-2">
      <div className="card-title">
        <h3 className="text-center shadow p-2">Hired</h3>
      </div>
      <div className="card-body">
        <p className="fw-bold">Total Hired: {allModels.length}</p>
        <p className="fw-bold">Added Models:</p>
        <div>
          {allModels.map((model) => (
            <Name key={model.id} model={model}></Name>
          ))}
        </div>
        <p className="mt-4 shadow p-2 fw-bold">Total Cost: ${totalCost}</p>
      </div>
    </div>
  );
};

export default Cart;
