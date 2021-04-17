import React from 'react';

import Table from './components/Table';

export default function CheapestFirst({ products }) {
  function getCheapestFirst() {
    let newProducts = products;

    newProducts.sort((a, b) => (a.price > b.price ? 1 : -1));

    return newProducts;
  }

  return <Table products={getCheapestFirst()} />;
}
