import React from 'react';

import About from './about';
import Landing from './landing';
import Projects from './projects';
import Resume from './resume';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Landing />
        <About />
        <Resume />
        <Projects />
      </div>
    );
  }
}
