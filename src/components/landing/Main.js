import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/**
 * masthead header: paddingTop: calc(6rem+72px); baddingBottom: 6rem
 * masthead h1: fontSize: 3rem, lineHeight:3rem
 * h2 = fontSize: 1.3rem, fontFamily: Lato
 */

const style = {
  headingOne: {
    fontSize: '3rem',
    lineHeight: '3rem'
  },
  headingTwo: {
    fontSize: '1.3rem',
    fontFamily: 'Lato'
  }
};
export default () => {
  return (
    <header
      style={{ height: '250px' }}
      id="main"
      className=" text-center text-white bg-primary"
    >
      <div className="container d-flex flex-column align-middle align-items-center pt-4">
        <h1
          style={style.headingOne}
          className="dflex-fill text-center mt-4 align-self-center text-uppercase"
        >
          Andrew Patipaksiri
        </h1>
        <div className="border-top">
          <h2 style={style.headingTwo} className="mt-2 flex-fill font-italic">
            Web Developer - React JS Specialist - User Experience Designer
          </h2>
        </div>
      </div>

      <div
        style={{ width: '18%', fontSize: '2.8rem' }}
        className="container d-flex justify-content-between"
      >
        <a
          className="mr-1"
          target="_blank"
          href="https://www.github.com/apati04"
        >
          <button className="btn btn-outline-light bmd-btn-fab">
            <FontAwesomeIcon icon={[ 'fab', 'github-alt' ]} />
          </button>
        </a>
        <a
          className="mr-1"
          target="_blank"
          href="https://www.linkedin.com/in/apati04"
        >
          <button className="btn btn-outline-light bmd-btn-fab">
            <FontAwesomeIcon className="p-1" icon={[ 'fab', 'linkedin-in' ]} />
          </button>
        </a>

        <a
          className="mr-1"
          target="_blank"
          href="https://drive.google.com/file/d/1sNKo3Twmp1Cxm_iR99kkLoAAfKv_63Ng/view?usp=sharing"
        >
          <button className="btn btn-outline-light bmd-btn-fab">
            <FontAwesomeIcon className="p-0 m-0" icon="info" />
          </button>
        </a>
      </div>
    </header>
  );
};
