import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default ({ title, description, photo, website, repo }) => {
  return (
    <div
      style={{ width: '50%' }}
      className="m-2 card border border-dark bg-dark rounded"
    >
      <div
        style={{ opacity: '0.9' }}
        className="d-flex justify-content-end align-items-center card-header m-0 p-0 bg-light rounded text-right border-bottom border-secondary"
      >
        <a className="mt-1 mr-2" target="_blank" href={repo}>
          <button className="btn btn-warning bmd-btn-fab-sm bmd-btn-fab">
            <FontAwesomeIcon className="p-1" icon="code" />
          </button>
        </a>
        <a href={website} target="_blank">
          <button className="mt-1 mr-2 btn btn-info bmd-btn-fab-sm bmd-btn-fab">
            <FontAwesomeIcon className="p-1" icon="external-link-alt" />
          </button>
        </a>
      </div>
      <div className="p-1 card-body">
        <img src={photo} alt="" className="card-img img-fluid" />
      </div>
    </div>
  );
};
