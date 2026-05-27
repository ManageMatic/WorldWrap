import React from 'react';
import './SkeletonCard.css';

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-img skeleton-shimmer"></div>
      <div className="skeleton-body">
        <div className="skeleton-title skeleton-shimmer"></div>
        <div className="skeleton-text skeleton-shimmer"></div>
        <div className="skeleton-text skeleton-shimmer"></div>
        <div className="skeleton-text short skeleton-shimmer"></div>
        <div className="skeleton-footer">
          <div className="skeleton-btn skeleton-shimmer"></div>
          <div style={{ display: 'flex' }}>
            <div className="card-action-icon skeleton-shimmer" style={{ border: 'none' }}></div>
            <div className="card-action-icon skeleton-shimmer" style={{ border: 'none' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
