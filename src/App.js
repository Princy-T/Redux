import React from 'react';
import './App.css';
import Header from './header';
import Side from './sidebar';
import Footer from './footer';
import Content from './content';

function App() {
  return (
    
    <div className="App">
      <Header />
      <Side/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;