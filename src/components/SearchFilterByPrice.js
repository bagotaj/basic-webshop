import React, { useState } from 'react';
import SearchInput from './SearchInput';

import db from '../firebase/db';

export default function SearchFilterByPrice({ setProducts }) {
  const [searchNumber, setSearchNumber] = useState('');
  const [condition, setCondition] = useState('==');

  function handleInputOnChange(e) {
    setSearchNumber(e.target.value);
  }

  function handleButtonOnClick(e) {
    e.preventDefault();

    let buttonId = e.target.id;

    if (buttonId === 'btn-above') {
      setCondition('<');
    } else if (buttonId === 'btn-below') {
      setCondition('>');
    } else if (buttonId === 'btn-exactly') {
      setCondition('==');
    }

    getDataFromServer();
  }

  function getDataFromServer() {
    db.collection('shopItems')
      .where('price', condition, parseInt(searchNumber))
      .get()
      .then((ref) => {
        const data = [];

        ref.docs.forEach((product) => {
          const docItem = product.data();
          docItem['docId'] = product.id;

          data.push(docItem);
        });

        setProducts(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  return (
    <div className="d-flex justify-content-between">
      <button
        className="btn btn-orange btn-lg me-3"
        id="btn-above"
        onClick={handleButtonOnClick}
      >
        Above
      </button>
      <button
        className="btn btn-orange btn-lg me-3"
        id="btn-below"
        onClick={handleButtonOnClick}
      >
        Below
      </button>
      <button
        className="btn btn-orange btn-lg me-3"
        id="btn-exactly"
        onClick={handleButtonOnClick}
      >
        Exactly
      </button>
      <SearchInput
        name={'filterbyprice'}
        labelText={'Filter by price:'}
        placeholderText={'...e.g.: 300'}
        inputState={searchNumber}
        onChange={handleInputOnChange}
        classesInput={'form-control orange-input m-0 w-100'}
      />
    </div>
  );
}
