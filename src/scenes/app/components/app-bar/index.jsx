import React from 'react';
import { AppBar as ToolboxAppBar } from 'react-toolbox';
import theme from './theme.css';

const AppBar = () => (
  <ToolboxAppBar
    theme={theme}
    title="React Weather App"
    leftIcon="menu"
    rightIcon="person"
  >
    {'TODO'}
  </ToolboxAppBar>
);

export default AppBar;
