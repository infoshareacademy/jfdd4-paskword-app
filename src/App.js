import React, { Component } from 'react';
import {render} from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import Map from './map/Map';
import Navbar from './navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar>
              <p>
                  <Link to={`/vets`}>Nasi weterynarze</Link>
                  <Link to={`/offices`}>Gabinety</Link>
              </p>
              
          </Navbar>
      {this.props.children}
      </div>
    );
  }
}

export default App;
