import React from 'react';
import Main from './landing/Main';
import About from './landing/About';
const Showcase = () => (
  <section id="showcase" className="bg-danger">
    showcase section
  </section>
);
export default () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar light bg-dark">
        <a href="#" className="narbar-brand">
          Navbar
        </a>
      </nav>
      <Main />
      <Showcase />
      <About />
    </div>
  );
};
