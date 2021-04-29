import React from 'react';
import LayoutMoreFilters from './LayoutMoreFilters';
import Table from './components/Table';

export default function PriceInOriginal({ products, linksMore }) {
  return (
    <LayoutMoreFilters linksMore={linksMore}>
      <Table products={products} currency={'huf'} />
    </LayoutMoreFilters>
  );
}
