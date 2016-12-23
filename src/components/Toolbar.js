import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import Button from './Button';

const styles = {
  toolbar: {
    backgroundColor: 'black',
  },
  button: {
    color: 'red',
  },
};

function Toolbar({ sheet: { classes } }) {
  return (
    <div className={classes.toolbar}>
      <div>
        <Button className={classes.button}>Foo</Button>
      </div>
    </div>
  );
}

Toolbar.propTypes = {
  sheet: PropTypes.object,
};

export default injectSheet(styles)(Toolbar);

