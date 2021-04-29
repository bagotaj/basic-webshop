import React from 'react';
import FilterBtns from './components/FilterBtns';

export default function LayoutMoreFilters({ linksMore, children }) {
  return (
    <>
      <FilterBtns links={linksMore} />
      <div>{children}</div>
    </>
  );
}
