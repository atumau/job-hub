import React from 'react';
import './Styles/joblistingcard.css'

function JobListingCard({ jobListing }) {
  return (
    <div className="job-listing-card">
      <h2 className='x1'>{jobListing.name}</h2>
      <p className='x2'><strong>Location:</strong> {jobListing.location}</p>
      <p className='x3'><strong>Category:</strong> {jobListing.category}</p>
      <p className='x4'><strong>Price:</strong> {jobListing.price}</p>
      <p className='x5'><strong>Description:</strong> {jobListing.description}</p>
    </div>
  );
}

export default JobListingCard;
