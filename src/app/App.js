import React, { Component } from 'react';
import './App.css';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';


class App extends Component {
  render() {
    return (
      <div id="ss_wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
