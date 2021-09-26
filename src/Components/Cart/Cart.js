import React from 'react';
import Name from '../Name/Name';

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
    <div className="card border-0 p-2 shadow">
      <div className="card-title">
        <h3 className="text-center">Hired</h3>
      </div>
      <div className="card-body">
        <p>Total Hired: {allModels.length}</p>
        <p>Added Products:</p>
        <div>
          {allModels.map((model) => (
            <Name key={model.id} model={model}></Name>
          ))}
        </div>
        <p className="mt-2 shadow p-2">Total Cost: ${totalCost}</p>
      </div>
    </div>
  );
};

export default Cart;
