import React from 'react';

export default ({ title, description, photo }) => {
  return (
    <div className="card">
      <img src={photo} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <small>link</small>
      </div>
    </div>
  );
};
