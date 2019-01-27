import React, { Component } from 'react';
import './App.css';
import NameBox from './NameBox';



class App extends Component {
  constructor() {
    super()
    this.state = {
      name: ''  
    }
  }

onNameChange = (event) => {
  this.setState({name: event.target.value});
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1> SyMyName! </h1>
         <p> {this.state.name}</p>
          <NameBox nameChange= {this.onNameChange} />
        </header>

      </div>
    );
  }
}

export default App;
