import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import Products from './products';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:0,
            title:"",
            category:"",
            description:"",
            price:0,
            image:""

        }
      }
        render(){
      return (
        <div>
          <center><h1>Product</h1></center>

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{this.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{this.description}</h6>
                <p class="card-text">{this.price}</p>
                <p class="card-text">{this.category}</p>
                <img className="image" src={this.image}  alt="image"/>

              </div>
            </div>

        </div>
      );
    }
}
export default Product