// src/components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/start.css';

const Card = () => {
  return (
    <div className="container mt-5">
      <div className="main4 row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">USER TYPE</h5>
              <ul className='type d-flex gap-2'>
                <li className='text'>Recruiter</li>
                <li>Job Seeker</li>
              </ul>
              <div className="butt mt-3 d-flex gap-4">
              <Link to='/login2'>
              <button className="btn btn-primary mr-2">Recruiter</button>    
                     </Link>
                     <Link to='/login'>
              <button className="btn btn-primary mr-2">Job Seeker</button>    
                     </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
