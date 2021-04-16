import React, { useState, useEffect } from 'react';
import db from './firebase/db';

import Webshop from './components/Webshop';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('shopItems').onSnapshot((snapshot) => {
      const data = [];

      snapshot.docs.forEach((product) => {
        const docItem = product.data();
        docItem['docId'] = product.id;

        data.push(docItem);
      });
      setProducts(data);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <Webshop products={products} setProducts={setProducts} />;
}
