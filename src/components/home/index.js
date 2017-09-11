import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="content content--vertical-alignment background-blue">
    <div className="welcome-content-wrapper">
      <div className="welcome-content-alignment">
        <div className="large-slogan-wrapper">
          <h3 className="large-slogan">whatever <span className="bold">you</span></h3>
          <h3 className="large-slogan">can <span className="bold">imagine</span></h3>
          <h3 className="large-slogan"><span className="bold">we</span> can <span className="bold">deliver</span>
          </h3>
        </div>
        <div className="welcome-button-wrapper">
          {/* <Link className="button-large" to="/project">PROJECT</Link>
          <span className="welcome-text">OR</span> */}
          <Link className="button-large" to="/demo">DEMO</Link>
        </div>
      </div>
    </div>
    <div className="welcome-image" />
  </div>
    );

export default Home;
