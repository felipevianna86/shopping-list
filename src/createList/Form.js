import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as formActions } from '../store/actions/form';

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

  componentDidUpdate(prevState) {
    if (
      this.props.form.action === 'update' &&
      prevState.form.productToUpdate !== this.props.form.productToUpdate
    ) {
      const {
        product,
        quantity,
        unity,
        price,
      } = this.props.form.productToUpdate;
      this.setState({
        list: this.props.form.listToUpdate,
        product,
        quantity,
        unity,
        price,
        showErrors: false,
      });
    }
  }

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
      this.props.form.action === 'new'
        ? this.addItem(price, product, quantity, unity, list)
        : this.updateItem(price, product, quantity, unity, list);
    }
  };

  addItem = (price, product, quantity, unity, list) => {
    this.props.addProduct({ price, product, quantity, unity }, list);
    this.clearState();
  };

  updateItem = (price, product, quantity, unity, list) => {
    const { id, checked } = this.props.form.productToUpdate;
    this.props.updateProduct(
      { price, product, quantity, unity, id, checked },
      list
    );
    this.clearState();
    this.finishUpdate();
  };

  finishUpdate = () => {
    this.props.finishUpdate();
  };

  clearState = () => {
    this.setState({
      product: '',
      quantity: '',
      unity: '',
      price: '',
      showErrors: false,
    });
  };

  render() {
    const buttonName = this.props.form.action === 'update' ? 'Update' : 'Add';
    if (!this.props.showForm) {
      return <div></div>;
    } else {
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
              {buttonName}
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
}

const mapStateToProps = (state, ownProps) => ({
  form: state.form,
  showForm: state.form.action === 'update' || ownProps.url === 'new',
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(formActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
