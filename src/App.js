import React, { Component } from 'react';
import {render} from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Map from './map/Map';

import { Grid, Row, Col } from 'react-bootstrap';
import OurNavbar from './navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Grid>
              <Row>
                  <Col>
                      <OurNavbar fluid>

                      </OurNavbar>
                  </Col>
              </Row>
          </Grid>
      {this.props.children}
      </div>
    );
  }
}

export default App;
