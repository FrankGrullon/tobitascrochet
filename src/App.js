import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/';
import Default from './components/Default';
import About from './components/About';
import Shipping from './components/Shipping';
import Samples from './components/Samples';
import Modal from './components/Modal';
import Contact from './components/Contact';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component= {Home} />
        <Route path="/products" component= {ProductList} />
        <Route path="/details" component= {Details} />
        <Route path="/cart" component= {Cart} />
        <Route path="/samples" component= {Samples} />
        <Route path="/about" component= {About} />
        <Route path="/shipping" component= {Shipping} />
        <Route path="/contact" component= {Contact} />
        <Route component= {Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
