import React from 'react';

export default ({ title, description, photo, website, repo }) => {
  return (
    <div
      style={{ width: '50%' }}
      className="d-flex justify-content-between card bg-info"
    >
      <div className="font-weight-bold text-center card-header">{title}</div>
      <img src={photo} alt="" className="card-img img-fluid" />
      <div className="card-footer">
        <a href={repo}>Repository</a>
        <a href={website}>Website</a>
      </div>
    </div>
  );
};
