import React from 'react'

class Project extends React.Component {

  render() {
    console.log( this.props.value );
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" >
        <div className="cart-thumb">
          <div className="project-image-box">
            <div className="images-inner">
              <img className="background-image" src={this.props.value.owner.avatar_url} alt="background"/>
              <img className="icon-image" src="images/icons/js.svg" alt="icon"/>
            </div>
            <div className="button-wrapper">
              <a href="home" className="source-button">Source</a>
              <a href="home" className="code-button">Code</a>
            </div>
          </div>
          <div className="button-wrapper-mobile">
            <a href="home" className="source-button">Source</a>
            <a href="home" className="code-button">Code</a>
          </div>
          <div className="project-text-inner">
            <h3 className="project-title">{this.props.value.name}</h3>
            <ul className="project-icon-languages">
              <li className="icon-language">
                <img className="icon-language-image" src="images/icons/js.svg" alt="lang"/>
              </li>
              <li className="icon-language">
                <img className="icon-language-image" src="images/icons/go.svg" alt="lang"/>
              </li>
              <li className="icon-language">
                <img className="icon-language-image" src="images/icons/gulp.svg" alt="lang"/>
              </li>
            </ul>
            <p className="project-description"> Veritatis atque molestiae delectus aut. Veritatis atque molestiae
              delectus
              aut. Veritatis atque molestiae delectus aut. Veritatis atque molestiae delectus aut. Veritatis atque
              molestiae delectus aut. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Project
