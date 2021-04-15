import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';
import Table from './Table';

export default function Webshop({ products, setProducts }) {
  return (
    <div>
      <Search products={products} setProducts={setProducts} />
      <Link to="/new-product">
        <button className="btn btn-orange mt-4 w-100">Add New Product</button>
      </Link>
      <Table products={products} />
    </div>
  );
}
