import React, { useState } from 'react';
import './Styles/addjoblisting.css'
import {TfiBackLeft} from 'react-icons/tfi'
import { Link } from 'react-router-dom';

function AddJobListing({ onAddJobListing }) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    category: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newJobListing = {
      id: Date.now(), 
      ...formData,
    };

    
    onAddJobListing(newJobListing);

    // Clear the form
    setFormData({
      name: '',
      location: '',
      category: '',
      price: '',
      description: '',
    });

   
    alert('Job listing added successfully!');
  };

  return (
    <div className='main'>
    <Link to="/homepage"><button className='btn'><TfiBackLeft/> Go to HomePage</button></Link>
  
      <h1 className='head-text'>Add a New Job Listing</h1>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="description">Description:</label><br />
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea><br /><br />

        <button type="submit">Add Job Listing</button>
      </form>
    </div>
  );
}

export default AddJobListing;
