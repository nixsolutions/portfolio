// import ReactDOM from 'react-dom';
// import axios from 'axios';
// import MockData from 'constants/mock'
import React from 'react';
import Project from 'components/project'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPostsIfNeeded } from '../actions'

class ProjectList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor( props ) {
    super( props );

    this.state = {
      posts: [],
      username: 'nixsolutions'
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded());
    console.log(this.props);
    // this.setState( { posts: MockData.data } );
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map( projects =>
            <Project key={projects.id}
                      value={projects}/>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { projectsFromGitHub } = state;
  const {
    isFetching,
    items: projects
  } = projectsFromGitHub || {
    isFetching: true,
    items: []
  };

  return {
    projects,
    isFetching,
  }
};

export default connect(mapStateToProps)(ProjectList)
