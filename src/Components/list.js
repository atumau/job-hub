import React, { useState } from 'react';
import './Styles/list.css';
import Menu from './menucard';
import { Link } from 'react-router-dom';

const List = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <h1 className='head text-center mt-5'>Recommended <span>Jobs</span></h1>
      <div className='menu-items container-fluid'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row my-1'>
              {items.map((elem) => {
                const { name,location,description, price } = elem;
                return (
                  <div className='col-12 col-md-6 col-lg-4 my-3' key={name}>
                    <div className='card'>
                      
                      <div className='card-body'>
                        <h5 className='card-title'>Job Title: {name}</h5>
                        <p className='card-text'>Description: {description}</p>
                        <h6 className='card-price'>Salary: {price}</h6>
                        <h3 className='card-price'>Location: {location}</h3>
                        <Link to='/contact'>
                          <button className='btn1 btn-primary'>
                            Apply Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
