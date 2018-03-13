import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Media from './media/Media';

const style = {
  footerStyle: {
    paddingTop: '5rem',
    paddingBottom: '5rem',
    backgroundColor: '#2c3e50',
    color: '#fff'
  }
};
export default class Footer extends Component {
  render() {
    return (
      <footer style={style.footerStyle} className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0" />
            </div>
            {/* <div className="col-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="#"
                  >
                    <i className="fa fa-fw fa-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="#"
                  >
                    <i className="fa fa-fw fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    target="_blank"
                    style={{ fontSize: '3rem' }}
                    className="p-0 m-0 text-center text-white"
                    href="https://www.github.com/apati04"
                  >
                    <FontAwesomeIcon icon={[ 'fab', 'github' ]} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="#"
                  >
                    <i className="fa fa-fw fa-linkedin" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="#"
                  >
                    <i className="fa fa-fw fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div> */}
            <Media />
            <div className="col-md-4">
              <h4 className="text-uppercase mb-4">more</h4>
              <p className="lead mb-0">
                extra
                <a href="http://startbootstrap.com">info</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
