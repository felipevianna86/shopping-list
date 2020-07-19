import React from 'react';
import CustomCard from '../common/CustomCard';

const NewList = (props) => (
  <CustomCard
    containerClass="new-list-container"
    link="/list/new"
    action={props.newList}
  >
    <div>
      <p className="title">Add New Lists</p>
    </div>
  </CustomCard>
);

export default NewList;
