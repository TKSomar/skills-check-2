import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import axios from 'axios';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    }

    this.addNewProduct = this.addNewProduct.bind(this);
  }

  addNewProduct(newProduct) {
    axios.post('http://localhost:4050/api/inventory', newProduct)
    .then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          <Dashboard />
          <Form />
        </div>
      </div>
    );
  }
}