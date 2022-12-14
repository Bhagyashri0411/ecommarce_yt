// import { Switch } from 'react-router';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from './components/Home';

import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import Selling from './components/Selling';


function App() {
  return (
    <>
    <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/products/:id" component={Product}></Route>
        <Route exact path="/selling" component={Selling}></Route>


      </Switch>
    </>
    // <div>
    // <Navbar/>
    // <Home/>
    // </div>
  );
}

export default App;
