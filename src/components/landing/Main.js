import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
export default () => {
  return (
    <section
      id="main"
      className="d-flex flex-column justify-content-between text-center bg-primary"
    >
      <div>
        <h1 className="display-2">Andrew</h1>
        <p>
          I'm Andrew -- a Fullstack Developer from Orange County, California. My
          expertise is with technologies like ReactJS, which allows me to create
          high performing, rich web applications
        </p>
        <p className="lead">ReactJS Developer</p>
        <button className="btn btn-default">Available for Hire</button>
        <button className="btn btn-info">Contanct Me</button>
      </div>
      <div>
        <FontAwesomeIcon icon="angle-double-down" />
      </div>
    </section>
  );
};
