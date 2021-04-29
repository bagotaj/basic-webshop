import React from 'react';
import { useParams } from 'react-router-dom';
import LayoutMoreFilters from '../LayoutMoreFilters';
import Table from './Table';

export default function FilterByType({ products, linksMore }) {
  const { type } = useParams();

  function getFilter() {
    let listOfElements = [];

    products.forEach((product) => {
      if (product.type.toLowerCase() === type) {
        listOfElements.push(product);
      }
    });

    return listOfElements;
  }

  return (
    <LayoutMoreFilters linksMore={linksMore}>
      <Table products={getFilter()} currency={'huf'} />
    </LayoutMoreFilters>
  );
}
