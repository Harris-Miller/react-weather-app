import React from 'react';
import { AppBar as ToolboxAppBar } from 'react-toolbox';
// import Link from './link';
import theme from './theme.css';

const AppBar = () => (
  <ToolboxAppBar
    theme={theme}
    title="React Weather App"
    leftIcon="menu"
    rightIcon="person"
  >
    {'TODO'}
    {/*<Link to="/">Dashboard</Link>
    <Link to="/vod">VOD</Link>
    <Link to="/linear">LINEAR</Link>*/}
  </ToolboxAppBar>
);

export default AppBar;
