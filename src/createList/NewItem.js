import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CustomCard from '../common/CustomCard';
import { Creators as FormActions } from '../store/actions/form';

const NewItem = (props) => (
  <CustomCard link="#" containerClass="list-item">
    <p className="title">New Product</p>
    <FontAwesomeIcon icon={faPlusCircle} color="#E4E4E4" size="8x" />
  </CustomCard>
);

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(FormActions, dispatch);

export default connect(null, mapDispatchToProps)(NewItem);
