import React, { Component } from 'react';
import './App.scss';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';


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
