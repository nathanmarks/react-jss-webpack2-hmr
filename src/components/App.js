import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';

const styleSheet = createStyleSheet('App', () => {
  return {
    root: {
      color: 'blue',
    },
  };
});

export default class App extends Component {
  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <h1 className={classes.root}>Hello World</h1>
    );
  }
}

