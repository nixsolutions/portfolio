import React, { Component } from 'react';
import Button from '../common/largeButton'
class Home extends Component {
  render() {
    return (
      <div className="content content--vertical-alignment">
        <div className="welcome-content-wrapper">
          <div className="welcome-content-alignment">
            <div className="large-slogan-wrapper">
              <h3 className="large-slogan">whatever <span className="bold">you</span></h3>
              <h3 className="large-slogan">can <span className="bold">imagine</span></h3>
              <h3 className="large-slogan"><span className="bold">we</span> can <span className="bold">deliver</span>
              </h3>
            </div>
            <div className="welcome-button-wrapper">
              <Button buttonName="PROJECT"/>
              <span className="welcome-text">OR</span>
              <Button buttonName="DEMO"/>
            </div>
          </div>
        </div>
        <div className="welcome-image"></div>
      </div>
    );
  }
}

export default Home;