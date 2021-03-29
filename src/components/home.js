import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Products from './products';
import Product from "./product-details";

class Home extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        fetch('https://apps.zamtel.co.zm/technical/products')
        .then(res => res.json())
        .then((data) => {
          this.setState({ products: data })
        })
        .catch(console.log)
      }
  render() {
    return (
          <Products products={this.state.products} />
    );
  }
}

export default Home;