import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default ({ title, description, photo, website, repo }) => {
  return (
    <div
      style={{ width: '50%', backgroundColor: '#eee' }}
      className="d-flex justify-content-between card"
    >
      <div
        style={{ opacity: '0.8' }}
        className="d-flex p-2 justify-content-between align-items-center card-header"
      >
        <h2 className="display-4 ml-2">{title}</h2>
        <div>
          <a className="mr-2" target="_blank" href={repo}>
            <button className="btn btn-warning bmd-btn-fab-sm bmd-btn-fab">
              <FontAwesomeIcon icon="code" />
            </button>
          </a>

          <a href={website} target="_blank">
            <button className="btn btn-info bmd-btn-fab-sm bmd-btn-fab">
              <FontAwesomeIcon icon="external-link-alt" />
            </button>
          </a>
        </div>
      </div>
      <img src={photo} alt="" className="card-img img-fluid" />
    </div>
  );
};
