import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from './Form';
import ListItem from './ListItem';
import NewItem from './NewItem';
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
    const paramsAction = this.props.match.params.action;
    return (
      <div className="page-container">
        <Form
          addProduct={this.addProduct}
          updateProduct={this.updateProduct}
          url={paramsAction}
        />

        <div className="list-items-container">
          {this.props.list.items.map((item) => (
            <ListItem
              list={this.props.list.list}
              item={item}
              deleteProduct={this.props.deleteProduct}
              toggleProduct={this.props.toggleProduct}
              key={item.id}
            />
          ))}

          {paramsAction === 'edit' && <NewItem list={this.props.list.list} />}
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
