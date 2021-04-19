import React from 'react';
import Table from './components/Table';
import LayoutMyShopMenu from './LayoutMyShopMenu';

export default function ContainsNike({ products, linksHome }) {
  function getContainsNike() {
    let listOfContainsNike = [];

    products.forEach((product) => {
      if (
        product.name.toLowerCase().includes('nike') ||
        product.description.toLowerCase().includes('nike')
      ) {
        listOfContainsNike.push(product);
      }
    });

    return listOfContainsNike;
  }

  return (
    <LayoutMyShopMenu linksHome={linksHome}>
      <Table products={getContainsNike()} currency={'huf'} />
    </LayoutMyShopMenu>
  );
}
