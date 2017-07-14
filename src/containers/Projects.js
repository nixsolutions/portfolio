import React from 'react';
import Project from 'components/project'
import { connect } from 'react-redux'
import { loadProjects } from 'actions/getProjects';
import { bindActionCreators } from 'redux';
import store from 'store/store'
import _ from 'lodash'
import Categories from "../components/categories/index";
import Footer from "../components/footer/index";

this.loadProjects = bindActionCreators( loadProjects, store.dispatch );

class Projects extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      filter: []
    };
    this.loadProjects = bindActionCreators( loadProjects, store.dispatch );
  }

  filterProjects( type ) {
    let index = this.state.filter.indexOf( type.name );
    let filters = this.state.filter;
    if ( index > -1 ) {
      filters.splice(index, 1)
    } else {
      filters.push( type.name );
    }
    this.setState( { filter: filters } );
  }

  handleUncheckAll(){
    this.setState( { filter: [] } );
  }

  componentDidMount() {
    this.loadProjects();
  }

  setFilters() {
    let types = [];
    let projects = _.clone( this.props.projects );
    projects.forEach( item => {
      if (!item.language) {
        item.language = 'With out category';
      }
      types.push( { name: item.language, checked: false } );
    } );
    const typesSorted = _.uniqBy( types, ( type ) => type.name );
    return typesSorted;
  }

  render() {
    let projects = _.clone( this.props.projects );
    if ( this.state.filter.length !== 0 ) {
      projects = _.filter( this.props.projects, ( project ) => this.state.filter.indexOf( project.language ) !== -1 )
    }

    if ( this.props.projects.length && this.props.projects.length !== 0 ) {
      return (
        <div>
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-3 col-sm-push-9 col-lg-2 col-lg-push-10">
                  <Categories
                    projects={this.props.projects}
                    types={this.setFilters()}
                    onUnchecked={i => this.handleClickUncheckAll( i )}
                    onClickFilter={( type ) => this.filterProjects( type )}
                    uncheckAll={() => this.handleUncheckAll()}/>
                </div>
                <div className="col-xs-12 col-sm-9 col-sm-pull-3 col-lg-10 col-lg-pull-2">
                  <div className="row row--flex">
                    <ul className="projects-list">
                      {projects.map( projects =>
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

const mapStateToProps = function ( store ) {
  return {
    projects: store.projects
  };
};

export default connect( mapStateToProps )( Projects )
