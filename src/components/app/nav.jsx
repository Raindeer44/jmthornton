import React from 'react';

export default class Nav extends React.PureComponent {
  render() {
    return (
      <header className="sticky">
        <a href="/" className="button" role="button">Home</a>
        <a href="/#connect" className="button" role="button">Connect</a>
        <a href="/gallery/" className="button" role="button">Gallery</a>
        <a href="https://blog.jmthornton.net" className="button" role="button">Blog</a>
      </header>
    );
  }
}
