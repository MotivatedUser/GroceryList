import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, togglePurchased, deleteItem } from './app/store';
import Header from './components/Header';
import AddItemForm from './components/AddItemForm';
import './App.css';
import ItemList from './components/ItemList';
import Filters from './components/Filters';
import { Button } from '@mui/material';

const App = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showUnpurchased, setShowUnpurchased] = useState(false);

  const handleAddItem = (newItem) => {
    dispatch(addItem(newItem));
  };

  const handleTogglePurchased = (itemToToggle) => {
    dispatch(togglePurchased(itemToToggle));
  };

  const handleDeleteItem = (itemToDelete) => {
    dispatch(deleteItem(itemToDelete));
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleUnpurchasedChange = (event) => {
    setShowUnpurchased(event.target.checked);
  };

  const filteredItems = items.filter((item) => {
    const categoryMatch = !selectedCategory || item.category === selectedCategory;
    const unpurchasedMatch = !showUnpurchased || !item.purchased;
    return categoryMatch && unpurchasedMatch;
  });

  function handlePrint() {
    window.print();
  }

  return (
    <div>
      <Header />
      <AddItemForm addItem={handleAddItem} />
      <Filters
        selectedCategory={selectedCategory}
        showUnpurchased={showUnpurchased}
        onCategoryChange={handleCategoryChange}
        onUnpurchasedChange={handleUnpurchasedChange}
      />
      <ItemList items={filteredItems} togglePurchased={handleTogglePurchased} deleteItem={handleDeleteItem} />
      <Button type="submit" variant="contained" color="primary" onClick={handlePrint} fullWidth>
        Print Shopping List
      </Button>
    </div>
  );
};

export default App;
