import React, { Component } from 'react';
import  './Assets/css/defaultmin.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';  
import Products from './components/pages/products'

import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <Header/>
           <Route exact path='/' component ={Homepage}/>
           <Route exact path='/Products' component ={Products}/>
      </div>
      </Router>
    );
  }
}

export default App;
