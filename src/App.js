import React from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Landing from './components/Home/Landing';
import {Provider} from 'react-redux';
import Store from './Store';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Provider store = {Store}>
    <div className="App">
      <Navbar/>
      <Landing/>
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;
