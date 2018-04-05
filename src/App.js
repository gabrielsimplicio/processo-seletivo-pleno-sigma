import React, { Component } from 'react';

import './App.css';
import  'toastr/build/toastr.min.css'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
     <div className='divBody'>
       <Header/>
       <Main/>
       <Footer/>
     </div>
    );
  }
}

export default App;
