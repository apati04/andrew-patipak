import React from 'react';
import Main from './landing/Main';
import About from './landing/About';
import Showcase from './landing/Showcase';
import Footer from './Footer';
export default () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar light bg-dark">
        <a href="#" className="narbar-brand">
          Navbars
        </a>
      </nav>
      <div className="d-flex flex-column">
        <Main />
        <Showcase />
        <About />
        <Footer />
      </div>
    </div>
  );
};
