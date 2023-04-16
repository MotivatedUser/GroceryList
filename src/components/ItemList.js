import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import Item from './Item';

const ItemList = ({ items, togglePurchased, deleteItem }) => {
  const groupByCategory = (items) => {
    return items.reduce((groupedItems, item) => {
      const category = item.category;
      if (!groupedItems[category]) {
        groupedItems[category] = [];
      }
      groupedItems[category].push(item);
      return groupedItems;
    }, {});
  };

  const renderCategoryItems = (categoryItems) => {
    return categoryItems.map((item, index) => (
        <Item
        key={index}
        item={item}
        togglePurchased={togglePurchased}
        deleteItem={deleteItem}
      />
    ));
  };

  const renderCategories = () => {
    const groupedItems = groupByCategory(items);

    function handlePrint() {
        window.print();
      }

    return Object.entries(groupedItems).map(([category, categoryItems], index) => (
      <React.Fragment key={index}>
        <Typography variant="h6" gutterBottom>
          {category}
        </Typography>
        <List dense>
          {renderCategoryItems(categoryItems)}
        </List>
        <Divider />
        <button onClick={handlePrint}>Print Shopping List</button>
      </React.Fragment>
      
    ));
  };

  return (
    <div>
      {items.length > 0 ? (
        renderCategories()
      ) : (
        <Typography variant="subtitle1">No items in the list</Typography>
      )}
      
    </div>
  );
};

export default ItemList;
