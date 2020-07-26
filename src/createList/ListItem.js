import React from 'react';

import { Checkbox, Typography } from '@material-ui/core';

import CustomCard from '../common/CustomCard';
import ListItemFooter from './ListItemFooter';

const ListItem = ({ item, deleteProduct, toggleProduct, list }) => (
  <CustomCard
    action={() => toggleProduct(item.id)}
    link="#"
    containerClass="list-item"
    image={item.img}
    footer={
      <ListItemFooter deleteProduct={deleteProduct} item={item} list={list} />
    }
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
