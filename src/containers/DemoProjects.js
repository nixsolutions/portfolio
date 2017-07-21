import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Categories from './Categories';
import { requestProjects } from '../actions/getProjects';
import Footer from '../components/footer/index';
import Spinner from '../components/spinner/index';
import Project from '../components/project';
import rootstore from '../store/store';

class DemoProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
    };
    this.loadProjects = bindActionCreators(requestProjects, rootstore.dispatch);
  }

  componentDidMount() {
    if (this.props.projects.length === 0) {
      this.loadProjects();
    }
  }

  setFilters() {
    const types = [];
    const portfolio = _.clone(this.props.portfolio);
    portfolio.forEach((item) => {
      let lang = item.language;
      if (!item.language) {
        lang = 'With out category';
      }
      types.push({ name: lang, checked: false });
    });
    const typesSorted = _.uniqBy(types, type => type.name);
    return typesSorted;
  }

  filterProjects(type) {
    const index = this.state.filter.indexOf(type.name);
    const filters = this.state.filter;
    if (index > -1) {
      filters.splice(index, 1);
    } else {
      filters.push(type.name);
    }
    this.setState({ filter: filters });
  }

  handleUncheckAll() {
    this.setState({ filter: [] });
  }

  render() {
    const portfolio = this.props.portfolio;

    let portfolioFiltered = _.clone(portfolio);
    if (this.state.filter.length !== 0) {
      portfolioFiltered = _.filter(portfolio, project =>
      this.state.filter.indexOf(project.language) !== -1);
    }

    if (portfolio.length && portfolio.length !== 0) {
      return (
        <div>
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-3 col-sm-push-9 col-lg-2 col-lg-push-10">
                  <Categories
                    projects={portfolio}
                    types={this.setFilters()}
                    onUnchecked={i => this.handleClickUncheckAll(i)}
                    onClickFilter={type => this.filterProjects(type)}
                    uncheckAll={() => this.handleUncheckAll()}
                  />
                </div>
                <div className="col-xs-12 col-sm-9 col-sm-pull-3 col-lg-10 col-lg-pull-2">
                  <div className="row">
                    <ul className="projects-list">
                      {portfolioFiltered.map((project, item) =>
                        <Project key={item} project={project} />,
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
    return (
      <Spinner />
    );
  }
}

DemoProjects.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    repository: PropTypes.string,
    demo: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    technology: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = function (store) {
  return {
    projects: store.projects.projects,
    portfolio: store.portfolio.portfolio,
  };
};

export default connect(mapStateToProps)(DemoProjects);
