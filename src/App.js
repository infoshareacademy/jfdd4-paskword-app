import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import Vet from 'vet/Vet';
import Advice from 'advice/Advice';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>
              <Link to={`/vet`}>Nasi weterynarze</Link>
              <Link to={`/advice`}>Porady</Link>
          </p>

      {this.props.children}
      </div>
    );
  }
}

export default App;
