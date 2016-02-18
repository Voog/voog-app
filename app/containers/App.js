import React, { Component, PropTypes } from 'react';

import Home from '../components/Home';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Home>
          {this.props.children}
        </Home>
        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./DevTools');
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
