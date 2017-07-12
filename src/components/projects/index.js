import React, { Component } from 'react';
import ProjectList from 'containers/projectsList'
import Categories from "components/categories/index";
import Footer from "components/footer/index";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-3 col-sm-push-9 col-lg-2 col-lg-push-10">
                <Categories/>
              </div>
              <div className="col-xs-12 col-sm-9 col-sm-pull-3 col-lg-10 col-lg-pull-2">
                <div className="row row--flex">
                  <ProjectList/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Projects;