import React from 'react';
import ReactTooltip from 'react-tooltip';
import Images from '../../assets/images/icons/index';
import './style.css';

class Project extends React.Component {
  componentWillMount() {
    function getRandomArbitrary(min, max) {
      return (Math.random() * (max - min)) + min;
    }
    const unicId = (getRandomArbitrary(1, 72).toFixed(0));
    const bgImage = require(`../../assets/images/background/background_image_${unicId}.svg`);
    this.setState({ bgImage, unicId });
  }

  render() {
    const project = this.props.project;

    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div className="cart-thumb">
          <div className="project-image-box">
            <div className="images-inner">
              <img className="background-image" src={this.state.bgImage} alt="background" />
              <img className="icon-image" src={Images[project.language]} alt="icon" />
            </div>
            <div className="button-wrapper">
              <a href={project.repository} className="source-button">Source</a>
              {project.demo !== '' &&
              <a href={project.demo} className="code-button">Demo</a>
              }
            </div>
          </div>
          <div className="button-wrapper-mobile">
            <a href={project.repository} className="source-button">Source</a>
            {project.demo !== '' &&
            <a href={project.demo} className="code-button">Demo</a>
            }
          </div>
          <div className="project-text-inner">
            <h3 className="project-title">{project.name}</h3>
            <ul className="project-icon-languages">
              {project.technology.map((lang, item) =>
                (<li data-tip={lang} data-for={`icon${lang}${this.state.unicId}`} className="icon-language" key={item}>
                  <ReactTooltip id={`icon${lang}${this.state.unicId}`} place="top" delayShow={50} type="info" effect="float" className="tooltip-categories" />
                  <img className="icon-language-image" src={Images[lang]} alt="lang" />
                </li>),
              )}

            </ul>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
