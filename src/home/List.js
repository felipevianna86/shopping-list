import React from 'react';

import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import CustomCard from '../common/CustomCard';
import ListFooter from './ListFooter';
import ListItem from './ListItem';

import './List.css';

const List = (props) => (
  <CustomCard
    containerClass="list-container"
    footer={<ListFooter total={props.total} />}
    link="/list"
  >
    <div>
      <p className="title">{props.list}</p>
      <div className="list-card-body">
        <ListItem
          icon={faShoppingBasket}
          text="1 remaining item(s)"
          size="sm"
        />
        <ListItem icon={faCheck} text="2 purchased item(s)" size="sm" />
      </div>
    </div>
  </CustomCard>
);

export default List;
