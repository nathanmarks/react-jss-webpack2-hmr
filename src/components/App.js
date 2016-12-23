import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import Button from './Button';
import Icon from './Icon';

const styles = {
  button: {
    color: 'blue',
  },
};

function App({ sheet: { classes } }) {
  return (
    <div>
      <Button
        icon={<Icon />}
        value="Hello World"
        className={classes.button}
      />
    </div>
  );
}

App.propTypes = {
  sheet: PropTypes.object,
};

export default injectSheet(styles)(App);

