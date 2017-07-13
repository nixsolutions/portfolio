import React from 'react';
import Project from 'components/project'
import { connect } from 'react-redux'
import { loadProjects } from 'actions/index';
import { bindActionCreators } from 'redux';
import store from 'store/store'
import _ from 'lodash'
import Categories from "../components/categories/index";
import Footer from "../components/footer/index";

let state = store.getState();

this.loadProjects = bindActionCreators( loadProjects, store.dispatch );

class Projects extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      projects: [],
      types: []
    };
    this.loadProjects = bindActionCreators( loadProjects, store.dispatch );
  }

  componentDidMount() {
    let types = [];
    store.subscribe( () => {
      state = store.getState();
      let projects = state.projects;
      projects.forEach( item => {
        types.push( {name: item.language, checked: false} );
      } );
      this.setState({projects: state.projects, types: _.sortedUniq( types )});
    } );
    this.loadProjects();
  }

  render() {
    let isEmpty = true;
    if ( this.props.projects.length && this.props.projects.length !== 0 ) {
      isEmpty = false;
    }
    if ( !isEmpty ) {
      return (
        <div>
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-3 col-sm-push-9 col-lg-2 col-lg-push-10">
                  <Categories types={this.state.types}/>
                </div>
                <div className="col-xs-12 col-sm-9 col-sm-pull-3 col-lg-10 col-lg-pull-2">
                  <div className="row row--flex">
                    <ul>
                      {this.state.projects.map( projects =>
                        <Project key={projects.id} value={projects}/>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      );
    }
    return (
      <div>Empty list of project</div>
    )
  }
}

export default connect(
  ( state ) => {
    return {
      projects: state.projects
    }
  }
)( Projects )
