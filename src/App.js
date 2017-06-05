import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="center">Something Awesome Coming Soon...</h1>
        <div  className="center">
          <Link to="/cm-react-todo3/about">About</Link>  
        </div>
      </div>
    );
  }
}

export default App;
