import React, { Component } from 'react';
class Contacts extends Component {
  render() {
    return (
      <div className="contacts-header-wrapper">
        <ul className="contacts-header">
          <li className="contact">
            <a href="skype:live:ask-nix-team?chat" className="contact-wrap">
              <span
                className="contact-icon light-blue icon-skype-w"></span> <span
              className="contact-text">ask-nix-team</span> </a>
          </li>
          <li className="contact">
            <a href="mailto:ask@nixsolutions.com" className="contact-wrap">
              <span
                className="contact-icon light-pink icon-mail-w"></span> <span className="contact-text">ask@nixsolutions.com</span>
            </a>
          </li>
          <li className="contact">
            <a href="tel:+380577840600" className="contact-wrap">
              <span
                className="contact-icon pink icon-phone-w"></span> <span
              className="contact-text">+38 057 784-06-00</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Contacts;