import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = {
  icon: {
    backgroundColor: 'red',
    color: 'red',
    width: 20,
    height: 20,
    display: 'block',
  },
};

function Icon({ className, sheet: { classes }, ...other }) {
  return (
    <span className={classNames(className, classes.icon)} {...other} />
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  sheet: PropTypes.object,
};

export default injectSheet(styles)(Icon);

