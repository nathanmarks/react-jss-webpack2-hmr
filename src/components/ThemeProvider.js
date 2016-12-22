// @flow weak
import { Component, PropTypes } from 'react';
import { create } from 'jss';
import { createStyleManager } from 'jss-theme-reactor/styleManager';
import jssPreset from 'jss-preset-default';

const createTheme = () => {};

export default class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    styleManager: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
    theme: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
  };

  static childContextTypes = {
    styleManager: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  static createDefaultContext(props = {}) {
    const theme = props.theme || createTheme();
    const styleManager = props.styleManager || createStyleManager({
      theme,
      jss: create(jssPreset()),
    });

    return { theme, styleManager };
  }

  getChildContext() {
    const { theme, styleManager } = this;
    return {
      theme,
      styleManager,
    };
  }

  componentWillMount() {
    const { theme, styleManager } = ThemeProvider.createDefaultContext(this.props);
    this.theme = theme;
    this.styleManager = styleManager;
  }

  componentWillUpdate(nextProps) {
    if (this.styleManager !== nextProps.styleManager) {
      const { theme, styleManager } = ThemeProvider.createDefaultContext(nextProps);
      this.theme = theme;
      this.styleManager = styleManager;
    } else if (this.theme && nextProps.theme && nextProps.theme !== this.theme) {
      this.theme = nextProps.theme;
      this.styleManager.updateTheme(this.theme);
    }
  }

  theme = undefined;
  styleManager = undefined;

  render() {
    return this.props.children;
  }
}
