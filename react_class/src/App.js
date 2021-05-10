import React, { Component } from 'react';
import Home from './Home';

class App extends Component{
  render(){
    const txtStyle = {
      color: 'white',
      backgroundColor: 'gray'
    };
  
    return (
      <div>
        <h1 style={txtStyle}>Hello Prayut</h1>
        <Home name = "My Mother Home" address = "Bangkok" />
      </div>
    );
  }
}

export default App;