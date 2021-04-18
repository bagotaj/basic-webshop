import React from 'react';
import LayoutMyShopMenu from './LayoutMyShopMenu';

export default function AverageStock({ products, linksHome }) {
  function getAverageStock() {
    let sum = 0;

    products.forEach((product) => {
      sum = sum + product.quantityOfStock;
    });

    let average = Math.round((sum / products.length) * 10) / 10;

    return average;
  }

  return (
    <LayoutMyShopMenu linksHome={linksHome}>
      <h2 className="mt-5">Average stock: {getAverageStock()}</h2>
    </LayoutMyShopMenu>
  );
}
