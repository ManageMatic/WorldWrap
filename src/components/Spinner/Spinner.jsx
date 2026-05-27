import React from 'react';
import SkeletonCard from '../SkeletonCard/SkeletonCard';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {[...Array(6)].map((_, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <SkeletonCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spinner;
