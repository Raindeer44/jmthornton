import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/app/foot';
import Nav from './components/app/nav';

class App extends Component {
  constructor(props) {
    super(props);
    // TODO let this drive page selection
    this.state = {
      selectedPage: 'Home'
    };
  }

  render() {
    return (
      <div>
        <Nav onPageSelect={selectedPage => this.setState({selectedPage})} />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

// Load the component into the dom
ReactDOM.render(<App />, document.querySelector('.container'));

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
