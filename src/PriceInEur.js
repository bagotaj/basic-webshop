import React, { useState } from 'react';
import LayoutMoreFilters from './LayoutMoreFilters';
import Table from './components/Table';

import db from './firebase/db';

export default function PriceInEur({ linksMore }) {
  const [newProducts, setNewProducts] = useState([]);

  function getDataFromDatabase() {
    db.collection('shopItems').onSnapshot((snapshot) => {
      const data = [];

      snapshot.docs.forEach((product) => {
        const docItem = product.data();
        docItem['docId'] = product.id;

        data.push(docItem);
      });

      setNewProducts(makePriceInEuro(data));
    });

    return newProducts;
  }

  function makePriceInEuro(data) {
    let euro = 361;
    let productsPriceInEuro = [];

    data.forEach((product) => {
      let price = product.price;

      product.price = Math.round((parseInt(price) / euro) * 100) / 100;

      productsPriceInEuro.push(product);
    });

    return productsPriceInEuro;
  }

  return (
    <LayoutMoreFilters linksMore={linksMore}>
      <Table products={getDataFromDatabase()} currency={'euro'} />
    </LayoutMoreFilters>
  );
}
