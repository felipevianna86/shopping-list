import React from 'react';

import { Checkbox, Typography } from '@material-ui/core';

import CustomCard from '../common/CustomCard';
import ListItemFooter from './ListItemFooter';

const ListItem = ({ item, deleteProduct, toggleProduct }) => (
  <CustomCard
    action={() => toggleProduct(item.id)}
    link="#"
    containerClass="list-item"
    footer={<ListItemFooter deleteProduct={deleteProduct} item={item} />}
    image="https://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg"
  >
    <div>
      <div className="list-item-header">
        <Typography variant="subtitle1" component="h2">
          {item.product}
        </Typography>
        <Checkbox checked={item.checked} />
      </div>
      <Typography component="p">
        {item.quantity} {item.unity}
      </Typography>
      <Typography component="p">R$ {item.price}</Typography>
    </div>
  </CustomCard>
);

export default ListItem;
