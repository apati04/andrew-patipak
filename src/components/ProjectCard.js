import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default ({ title, description, photo, website, repo }) => {
  return (
    <div style={{ width: '50%' }} className="m-2 card">
      <div className="bg-dark">
        <img
          style={{ opacity: '0.5' }}
          src={photo}
          alt=""
          className="p-0 card-img img-fluid bg-dark"
        />
      </div>

      <div className="d-flex justify-content-end card-img-overlay text-right">
        <a className="mr-2" target="_blank" href={repo}>
          <button className="btn btn-warning bmd-btn-fab">
            <FontAwesomeIcon icon="code" />
          </button>
        </a>
        <a href={website} target="_blank">
          <button className="btn btn-info bmd-btn-fab">
            <FontAwesomeIcon icon="external-link-alt" />
          </button>
        </a>
      </div>
    </div>
  );
};
