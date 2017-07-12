import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
import MockData from '../constants/mock'
import Project from '../components/project'

class ProjectList extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      posts: [],
      username: 'nixsolutions'
    };
  }

  componentDidMount() {
    this.setState( { posts: MockData.data } );
    // axios.get('https://api.github.com/users/' + this.state.username + '/repos')
    //   .then(res => {
    //     const posts = res;
    //     this.setState({ posts: posts });
    //   });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map( post =>
            <Project key={post.id}
                      value={post}/>
          )}
        </ul>
      </div>
    );
  }
}

export default ProjectList
