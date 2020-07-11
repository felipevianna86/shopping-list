import React, { Component } from 'react';

import { Button, MenuItem, TextField, InputAdornment } from '@material-ui/core';
const units = ['KG', 'LT', 'UN'];

class Form extends Component {
  state = {
    list: '',
    product: '',
    quantity: '',
    unity: '',
    price: '',
    showErrors: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const { price, product, quantity, unity, list } = this.state;

    if (!product || !quantity || !unity || !list) {
      this.setState({
        showErrors: true,
      });
    } else {
      this.props.addProduct({ price, product, quantity, unity }, list);
      this.setState({
        product: '',
        quantity: '',
        unity: '',
        price: '',
        showErrors: false,
      });
    }
  };

  render() {
    return (
      <form className="form-container">
        <div className="form-row">
          <TextField
            name="list"
            label="List"
            value={this.state.list}
            onChange={this.handleChange}
            required
            error={!this.state.list && this.state.showErrors}
          />
          <Button
            variant="outlined"
            onClick={this.handleSubmit}
            color="secondary"
          >
            Add
          </Button>
        </div>
        <div className="form-row">
          <TextField
            name="product"
            label="Product"
            value={this.state.product}
            onChange={this.handleChange}
            required
            error={!this.state.product && this.state.showErrors}
          />
          <TextField
            name="quantity"
            label="Quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
            required
            error={!this.state.quantity && this.state.showErrors}
          />

          <TextField
            select
            name="unity"
            label="Unity"
            value={this.state.unity}
            onChange={this.handleChange}
            required
            error={!this.state.unity && this.state.showErrors}
          >
            {units.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            name="price"
            label="Price"
            value={this.state.price}
            onChange={this.handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
          />
        </div>
      </form>
    );
  }
}

export default Form;
