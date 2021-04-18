import React from 'react';

import Table from './components/Table';
import LayoutMyShopMenu from './LayoutMyShopMenu';

export default function CheapestFirst({ products, linksHome }) {
  function getCheapestFirst() {
    let newProducts = products;

    newProducts.sort((a, b) => (a.price > b.price ? 1 : -1));

    return newProducts;
  }

  return (
    <LayoutMyShopMenu linksHome={linksHome}>
      <Table products={getCheapestFirst()} />
    </LayoutMyShopMenu>
  );
}
