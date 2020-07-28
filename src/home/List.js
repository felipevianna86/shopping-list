import React from 'react';

import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import CustomCard from '../common/CustomCard';
import ListFooter from './ListFooter';
import ListItem from './ListItem';

import './List.css';

const List = (props) => (
  <CustomCard
    containerClass="list-container"
    footer={<ListFooter date={props.date} total={props.total} />}
    link="/list/edit"
    cardClass={props.openedItems > 0 ? 'opened-list' : 'closed-list'}
  >
    <div>
      <p className="title">{props.list}</p>
      <div className="list-card-body">
        <ListItem
          icon={faShoppingBasket}
          text={`${props.openedItems} remaining item(s)`}
          size="sm"
        />
        <ListItem
          icon={faCheck}
          text={`${props.closedItems} purchased item(s)`}
          size="sm"
        />
      </div>
    </div>
  </CustomCard>
);

export default List;
