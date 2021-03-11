import React from 'react';
import ItemWrapper from '../../../contexts/item.context';
import ItemDetails from './item-details';

function Item(props) {
  return (
    <ItemWrapper {...props}>
      <ItemDetails {...props} />
    </ItemWrapper>
  );
}

export default Item;
