import React from 'react'

class Language extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      language: ''
    }
  }

  render() {
    return (
      <li className="icon-language">
        <img className="icon-language-image" src="images/icons/js.svg" alt="lang"/>
      </li>
    );
  }
}

export default Language
