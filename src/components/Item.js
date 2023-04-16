import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox } from '@mui/material';
import { TiDelete } from 'react-icons/ti';

const Item = ({ item, togglePurchased, deleteItem }) => {
  const handleTogglePurchased = () => {
    togglePurchased(item);
  };

  const handleDeleteItem = () => {
    deleteItem(item);
  };

  return (
    <ListItem>
      <Checkbox
        checked={item.purchased}
        onChange={handleTogglePurchased}
        color="primary"
      />
      <ListItemText
        primary={`${item.name} (${item.quantity})`}
        secondary={item.purchased ? 'Purchased' : 'Not purchased'}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleDeleteItem}>
          <TiDelete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Item;
