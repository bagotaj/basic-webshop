import React from 'react';
import Table from './components/Table';

export default function ContainsNike({ products }) {
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

  return <Table products={getContainsNike()} />;
}
