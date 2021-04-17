import React from 'react';

export default function AverageStock({ products }) {
  function getAverageStock() {
    let sum = 0;

    products.forEach((product) => {
      sum = sum + product.quantityOfStock;
    });

    let average = Math.round((sum / products.length) * 10) / 10;

    return average;
  }

  return <h2 className="mt-5">Average stock: {getAverageStock()}</h2>;
}
