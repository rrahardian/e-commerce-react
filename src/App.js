import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './page/Home'
import ProductPage from './page/ProductPage'
import Cart from './page/Cart'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route exact path="/product-page" component={ProductPage} />
        <Route exact path="/cart" component={Cart} />

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
