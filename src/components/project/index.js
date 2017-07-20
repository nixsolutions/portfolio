import React from 'react';
import ReactTooltip from 'react-tooltip';
import Images from '../../assets/index';
import './style.css';

class Project extends React.Component {
  render() {
    const unicId = (Math.random()).toFixed(3);
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div className="cart-thumb">
          <div className="project-image-box">
            <div className="images-inner">
              <img className="background-image" src={Images[this.props.value.logo_background]} alt="background" />
              <img className="icon-image" src={Images[this.props.value.language]} alt="icon" />
            </div>
            <div className="button-wrapper">
              <a href={this.props.value.repository} className="source-button">Source</a>
              {this.props.value.demo !== '' &&
              <a href={this.props.value.demo} className="code-button">Demo</a>
              }
            </div>
          </div>
          <div className="button-wrapper-mobile">
            <a href={this.props.value.repository} className="source-button">Source</a>
            {this.props.value.demo !== '' &&
            <a href={this.props.value.demo} className="code-button">Demo</a>
            }
          </div>
          <div className="project-text-inner">
            <h3 className="project-title">{this.props.value.name}</h3>
            <ul className="project-icon-languages">
              {this.props.value.technology.map((lang, item) =>
                (<li data-tip={lang} data-for={`icon${lang}${unicId}`} className="icon-language" key={item}>
                  <ReactTooltip id={`icon${lang}${unicId}`} place="top" delayShow={50} type="info" effect="float" className="tooltip-categories" />
                  <img className="icon-language-image" src={Images[lang]} alt="lang" />
                </li>),
              )}

            </ul>
            <p className="project-description">{this.props.value.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
