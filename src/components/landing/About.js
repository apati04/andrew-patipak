import React from 'react';

export default () => {
  return (
    <div>
      <section id="about-section" className="container">
        <div className="div border-bottom">
          <h2 className="text-left display-4 font-italic">about</h2>
        </div>
        <div className="border-bottom">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          efficitur aliquam felis commodo scelerisque. Curabitur lobortis leo ut
          tempus volutpat. Quisque elementum dictum turpis id mollis. Donec
          suscipit pretium dui, sit amet porta massa condimentum nec. Duis
          convallis pulvinar lectus nec scelerisque. Duis quis mauris vel eros
          finibus vulputate non in elit. Mauris vel varius ex. Vivamus pulvinar
          diam vitae dolor dapibus, at vehicula sem tristique. Ut mollis diam ac
          convallis malesuada. Aliquam non sagittis arcu. Donec eget lorem
          dictum, pharetra eros non, consequat nibh. Aliquam suscipitluctus leo
          id malesuada.
        </div>
        <div className="row d-flex justify-content-around">
          <div className="card">
            <div className="card-header">card title</div>
            <div className="card-body m-2">
              <img
                src="https://loremflickr.com/320/240"
                className="img-thumbnail"
                alt="cat"
              />
              <p className="lead text-center">text center lead</p>
            </div>
          </div>
          <div className="card m-2">
            <div className="card-header">card title</div>
            <div className="card-body">
              <img
                src="https://loremflickr.com/320/240"
                className="img-thumbnail"
                alt="cat"
              />
              <p className="lead text-center">text center lead</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
