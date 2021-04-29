import React from 'react';
import FilterBtns from './components/FilterBtns';

export default function LayoutMyShopMenu({ linksHome, children }) {
  return (
    <>
      <FilterBtns links={linksHome} />
      <div>{children}</div>
    </>
  );
}
