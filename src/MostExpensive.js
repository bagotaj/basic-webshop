import React from 'react';
import LayoutMyShopMenu from './LayoutMyShopMenu';

export default function MostExpensive({ products, linksHome }) {
  function getMostExpensive() {
    let newProducts = products;

    newProducts.sort((a, b) => (a.price < b.price ? 1 : -1));

    return newProducts[0].name;
  }

  return (
    <LayoutMyShopMenu linksHome={linksHome}>
      <h2 className="mt-5">
        Most expensive available: <i>{getMostExpensive()}</i>
      </h2>
    </LayoutMyShopMenu>
  );
}
