import 'bootstrap';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { unregister } from './registerServiceWorker';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import {
  faCheckSquare,
  faCoffee,
  faAngleDoubleDown,
  faCode,
  faExternalLinkAlt,
  faFilePdf
} from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(
  brands,
  faCheckSquare,
  faCoffee,
  faCode,
  faExternalLinkAlt,
  faFilePdf
);
ReactDOM.render(<App />, document.getElementById('root'));
unregister();
