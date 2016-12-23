import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = {
  button: {
    backgroundColor: 'yellow',
    color: 'red',
    border: 0,
    fontSize: 24,
    padding: 10,
  },
  icon: {
    backgroundColor: 'green',
  },
};

function Button({ className, icon, sheet: { classes }, value, ...other }) {
  return (
    <button className={classNames(className, classes.button)} {...other}>
      {icon && React.cloneElement(icon, { className: classes.icon })}
      {value}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  sheet: PropTypes.object,
  value: PropTypes.string,
};

export default injectSheet(styles)(Button);

