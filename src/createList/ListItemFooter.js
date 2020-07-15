import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as formActions } from '../store/actions/form';

const ListItemFooter = (props) => (
  <div className="list-card-footer">
    <div className="list-card-footer-actions">
      <FontAwesomeIcon
        onClick={() => props.startUpdate(props.item)}
        icon={faPen}
        color="#115293"
        size="1x"
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        onClick={() => props.deleteProduct(props.item.id)}
        icon={faTrash}
        color="#ff9800"
        size="1x"
      ></FontAwesomeIcon>
    </div>
    <p>Total: R$ {props.item.total}</p>
  </div>
);
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(formActions, dispatch);

export default connect(null, mapDispatchToProps)(ListItemFooter);
