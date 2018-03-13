import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Media from './media/Media';

const style = {
  footerStyle: {
    paddingTop: '5rem',
    paddingBottom: '5rem',
    backgroundColor: '#2c3e50'
  }
};
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer style={style.footerStyle}>
          <div className="container-fluid d-flex flex-column align-items-center text-center text-white">
            <div>
              <a className="text-white" href="mailto:andrewpatipak@gmail.com">
                <h4 className="text-uppercase">Available for hire</h4>
                <h4 className="text-uppercase">Contact Me</h4>
              </a>
              <p className="lead mb-0">andrew.patipak@gmail.com</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
