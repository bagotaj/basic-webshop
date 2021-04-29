import React from 'react';
import LayoutMoreFilters from './LayoutMoreFilters';
import Table from './components/Table';
import SearchFilterByPrice from './components/SearchFilterByPrice';

export default function FilterByPrice({ products, setProducts, linksMore }) {
  return (
    <LayoutMoreFilters linksMore={linksMore}>
      <SearchFilterByPrice setProducts={setProducts} />
      <Table products={products} currency={'huf'} />
    </LayoutMoreFilters>
  );
}
