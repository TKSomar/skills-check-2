import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            price: 0,
            imgurl: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
        }
    }

    imgHandleChange(e) {
        this.setState({
            imgurl: e.target.value
        });
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    handlePriceChange(e) {
        this.setState({
            price: e.target.value,
        });
    }

    addProduct = () => {
        const {name, price, imgurl} = this.state;
        const newProduct = {name, price, imgurl};
        this.props.addNewProduct(newProduct);
    }

    clearInputs() {
        document.getElementById('img-url').value = "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081";
        document.getElementById('product-name').value = "";
        document.getElementById('price').value = 0
    }

    render() {
        return <div className="Form">
                <img src={this.state.imgurl} width="80%" height="40%" alt="product-preview" className="product-img" />
                    <label for="img-url" >Image URL:</label>
                        <input type="text" id="img-url" name="img-url" onChange={(e) => {this.imgHandleChange(e)}} ></input>
                    <label for="product-name">Product Name:</label>
                        <input type="text" id="product-name" name="product-name" onChange={(e) => {this.handleNameChange(e)}} ></input>
                    <label for="price">Price:</label>
                        <input type="number" id="price" name="price" onChange={(e) => {this.handlePriceChange(e)}}></input>
                    
                    <br />

                    <div className="btns">
                        <button id="cancel" onClick={this.clearInputs}>Cancel</button>
                        <button id="add" onClick={this.addProduct}>Add to Inventory</button>
                    </div>
            </div>
    }
}