import React, { Component } from 'react';

import Counter from './components/counter/Counter';
import Posts from './components/posts/Posts';

import logo from './assets/logo.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header className='app__header'>
          <h1 className='app__title'>Welcome to mantagen</h1>
        </header>
        <main className='app__main'>
          <Counter />
          <Posts category='news' tags={['gaza', 'gsg', 'life', 'real_timez']} />
        </main>
        <footer className='app__footer'>
          <img src={logo} className='app__logo' alt='call me hand' />
          Thank you for visiting
        </footer>
      </div>
    );
  }
}

export default App;
