import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">

        <div className="col-sm-6 col-md-3">
          <div className="about-nix">
            <div className="about-nix-logo" />
            <div className="about-nix-text">NIX Solutions delivers expert-level software engineering services.
              </div>
            <div className="about-nix-text">Since 1994, we have been helping clients achieve target business
                outcomes using technology.
              </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="contacts-footer">
            <h3 className="contacts-footer-title">Contacts</h3>
            <div className="contacts-footer-inner">
              <ul className="contacts-footer-left">
                <li className="contact-footer">
                  <a href="home" className="contact-footer-wrapper"> <span
                    className="contact-footer-icon icon-skype-g"
                  /> <span
                    className="contact-footer-text"
                  >asc-nix-team</span> </a>
                </li>
                <li className="contact-footer">
                  <a href="home" className="contact-footer-wrapper"> <span
                    className="contact-footer-icon icon-phone-g"
                  /> <span
                    className="contact-footer-text"
                  >+38 057 784-06-00</span> </a>
                </li>
                <li className="contact-footer">
                  <a href="home" className="contact-footer-wrapper"> <span
                    className="contact-footer-icon icon-print-g"
                  /> <span
                    className="contact-footer-text"
                  >+38 057 784-06-16</span> </a>
                </li>
                <li className="contact-footer">
                  <a href="home" className="contact-footer-wrapper"> <span
                    className="contact-footer-icon icon-email-g"
                  /> <span
                    className="contact-footer-text"
                  >ask@nixsolutions.com</span> </a>
                </li>
              </ul>
              <ul className="contacts-footer-right">
                <li className="contact-footer">
                  <a href="home" className="contact-footer-wrapper"> <span
                    className="contact-footer-icon icon-facebook-g"
                  /> <span
                    className="contact-footer-text"
                  >Facebook</span> </a>
                </li>
                <li className="contact-footer">
                  <a href="home" className="contact-footer-wrapper"> <span
                    className="contact-footer-icon icon-google-g"
                  /> <span
                    className="contact-footer-text"
                  >Google+</span> </a>
                </li>
                <li className="contact-footer">
                  <a href="home" className="contact-footer-wrapper"> <span
                    className="contact-footer-icon icon-youtube-g"
                  /> <span
                    className="contact-footer-text"
                  >YouTube</span> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="copiright">© NIX SOLUTIONS LTD 2017</div>
        </div>

      </div>
    </div>
  </div>
  );

export default Footer;
