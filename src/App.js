import React, { Component } from 'react';

import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;
