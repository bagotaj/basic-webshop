import React from 'react';
import LayoutMoreFilters from './LayoutMoreFilters';
import Table from './components/Table';

export default function MoreFilters({ products, linksMore }) {
  return (
    <LayoutMoreFilters linksMore={linksMore}>
      <Table products={products} />
    </LayoutMoreFilters>
  );
}
