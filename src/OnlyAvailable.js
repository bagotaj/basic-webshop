import React from 'react';
import Table from './components/Table';

export default function OnlyAvailable({ products, setProducts }) {
  function filterOnlyAvailable() {
    let newProducts = [];

    products.forEach((product) => {
      if (product.quantityOfStock > 0) {
        newProducts.push(product);
      }
    });

    return newProducts;
  }

  return <Table products={filterOnlyAvailable()} />;
}
