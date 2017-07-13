import React from 'react';
import Project from 'components/project'
import { connect } from 'react-redux'
import { loadProjects } from 'actions/index';
import { bindActionCreators } from 'redux';
import store from 'store/store'

let state = store.getState();



this.loadProjects = bindActionCreators(loadProjects, store.dispatch);

class ProjectList extends React.Component {
  constructor(props){
    super(props);
    this.loadProjects = bindActionCreators(loadProjects, store.dispatch);
  }
  componentDidMount() {
    store.subscribe(() => {
      state = store.getState();
      this.projects = state.projects;
    });
    this.loadProjects();
  }

  render() {
    let isEmpty = true;
    if (this.props.projects.length && this.props.projects.length !== 0) {
      isEmpty = false;
    }
    if (!isEmpty) {
      return (
        <div>
          <ul>
            {this.props.projects.map( projects =>
              <Project key={projects.id} value={projects}/>
            )}
          </ul>
        </div>
      );
    }
    return (<div>Empty list of project</div>)
  }
}

export default connect(
  ( state ) => {
    return {
      projects: state.projects
    }
  }
)( ProjectList )
