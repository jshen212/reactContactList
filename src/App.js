import React, { Component } from 'react';
import { Header } from './Components/Header/Header';
import { MainContacts } from './Components/MainContacts/MainContacts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContacts />
      </div>
    );
  }
}

export default App;
