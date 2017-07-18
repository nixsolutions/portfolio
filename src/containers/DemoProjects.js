import Categories from "../components/categories/index";
import { loadProjects } from 'actions/getProjects';
import Footer from "../components/footer/index";
import Spinner from 'components/spinner/index';
import { bindActionCreators } from 'redux';
import Project from 'components/project';
import { connect } from 'react-redux';
import store from 'store/store';
import React from 'react';
import _ from 'lodash';


class DemoProjects extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      filter: []
    };
    this.loadProjects = bindActionCreators( loadProjects, store.dispatch );
  }

  componentDidMount() {
    if (this.props.projects.length === 0) {
      this.loadProjects();
    }
  }

  filterProjects( type ) {
    let index = this.state.filter.indexOf( type.name );
    let filters = this.state.filter;
    if ( index > -1 ) {
      filters.splice( index, 1 )
    } else {
      filters.push( type.name );
    }
    this.setState( { filter: filters } );
  }

  handleUncheckAll() {
    this.setState( { filter: [] } );
  }

  setFilters() {
    let types = [];
    let portfolio = _.clone( this.props.portfolio );
    portfolio.forEach( item => {
      if ( !item.language ) {
        item.language = 'With out category';
      }
      types.push( { name: item.language, checked: false } );
    } );
    const typesSorted = _.uniqBy( types, ( type ) => type.name );
    return typesSorted;
  }

  render() {
    let portfolio = _.clone( this.props.portfolio );
    if ( this.state.filter.length !== 0 ) {
      portfolio = _.filter( this.props.portfolio, ( project ) => this.state.filter.indexOf( project.language ) !== -1 )
    }

    if ( this.props.portfolio.length && this.props.portfolio.length !== 0 ) {
      return (

        <div>
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-3 col-sm-push-9 col-lg-2 col-lg-push-10">
                  <Categories
                    projects={this.props.portfolio}
                    types={this.setFilters()}
                    onUnchecked={i => this.handleClickUncheckAll( i )}
                    onClickFilter={( type ) => this.filterProjects( type )}
                    uncheckAll={() => this.handleUncheckAll()}/>
                </div>
                <div className="col-xs-12 col-sm-9 col-sm-pull-3 col-lg-10 col-lg-pull-2">
                  <div className="row">
                    <ul className="projects-list">
                      {portfolio.map( ( project, item ) =>
                        <Project key={item} value={project}/>
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
      <Spinner/>
    )
  }
}

const mapStateToProps = function ( store ) {
  return {
    projects: store.projects,
    showSpinnerProjects: store.showSpinnerProjects,
    portfolio: store.portfolio
  };
};

export default connect( mapStateToProps )( DemoProjects )
