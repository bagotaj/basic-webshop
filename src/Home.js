import React from 'react';

import { Link } from 'react-router-dom';

import Search from './components/Search';
import Table from './components/Table';
import LayoutMyShopMenu from './LayoutMyShopMenu';

export default function Home({ products, setProducts, linksHome }) {
  return (
    <LayoutMyShopMenu linksHome={linksHome}>
      <Search products={products} setProducts={setProducts} />
      <Link to="/new-product">
        <button className="btn btn-orange mt-4 w-100">Add New Product</button>
      </Link>
      <Table products={products} />
    </LayoutMyShopMenu>
  );
}
