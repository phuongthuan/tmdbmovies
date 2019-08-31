import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import Search from "../../components/Search/Search";


class App extends Component {
  render() {
    return (
      <div id="ss_wrapper">
        <Header />
        <Search/>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
