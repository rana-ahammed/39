import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
  const {name} = props.product;
  return (
    <div>
      <h4>This is Category Detail </h4>
      <p>Selected Category: {name}</p>
    </div>
  );
};

export default CategoryDetail;