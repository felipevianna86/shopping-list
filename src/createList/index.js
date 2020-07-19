import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from './Form';
import ListItem from './ListItem';
import { Creators as ListAction } from '../store/actions/list';

import './List.css';

class CreateList extends Component {
  addProduct = (product, list) => {
    this.props.addProduct(product, list);
  };

  updateProduct = (product, list) => {
    this.props.updateProduct(product, list);
  };

  render() {
    return (
      <div className="page-container">
        <Form
          addProduct={this.addProduct}
          updateProduct={this.updateProduct}
          url={this.props.match.params.action}
        />

        <div className="list-items-container">
          {this.props.list.items.map((item) => (
            <ListItem
              item={item}
              deleteProduct={this.props.deleteProduct}
              toggleProduct={this.props.toggleProduct}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ListAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
