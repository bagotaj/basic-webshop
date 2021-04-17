import React from 'react';

export default function MostExpensive({ products }) {
  function getMostExpensive() {
    let newProducts = products;

    newProducts.sort((a, b) => (a.price < b.price ? 1 : -1));

    return newProducts[0].name;
  }

  return (
    <h2 className="mt-5">
      Most expensive available: <i>{getMostExpensive()}</i>
    </h2>
  );
}
