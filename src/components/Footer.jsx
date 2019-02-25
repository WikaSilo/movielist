import React, { Component } from 'react';
import logo from '../img/logo.svg';

import '../css/Footer.css'

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div id="button"></div>
            <div id="container">
              <div id="cont">
                <div className="footer_center">
                  <p>Wikanyaa, Powered By:</p><img src={logo} className="App-logo" alt="logo" /> 
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;