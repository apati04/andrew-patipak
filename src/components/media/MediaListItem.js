import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
export default ({ href, icon, color }) => {
  return (
    <li className="mb-0">
      <button
        type="button"
        style={{ opacity: '0.8' }}
        className="btn btn-light bmd-btn-fab"
      >
        <a href={href}>
          <div style={{ fontSize: '2rem' }} className="align-self-center">
            <FontAwesomeIcon icon={icon} />
          </div>
        </a>
      </button>
    </li>
  );
};
