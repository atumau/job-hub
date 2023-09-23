import React from 'react';
import JobListingCard from './joblistingcard';

function MenuList({ menu }) {
  return (
    <div className="menu-list">
      <h1 className='text-center'>Job Listings</h1>
      {menu.map((jobListing) => (
        <JobListingCard key={jobListing.id} jobListing={jobListing} />
      ))}
    </div>
  );
}

export default MenuList;
