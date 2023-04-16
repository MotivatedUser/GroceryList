import React, { useState } from 'react';
import Header from './components/Header';
import AddItemForm from './components/AddItemForm';
import './App.css';
import ItemList from './components/ItemList';
import Filters from './components/Filters';


const App = () => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showUnpurchased, setShowUnpurchased] = useState(false);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const togglePurchased = (itemToToggle) => {
    const updatedItems = items.map((item) =>
      item === itemToToggle ? { ...item, purchased: !item.purchased } : item
    );
    setItems(updatedItems);
  };

  const deleteItem = (itemToDelete) => {
    const updatedItems = items.filter((item) => item !== itemToDelete);
    setItems(updatedItems);
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

  return (
    <div>
      <Header />
      <AddItemForm addItem={addItem} />
      <Filters
        selectedCategory={selectedCategory}
        showUnpurchased={showUnpurchased}
        onCategoryChange={handleCategoryChange}
        onUnpurchasedChange={handleUnpurchasedChange} 
      />
      <ItemList items={filteredItems} togglePurchased={togglePurchased} deleteItem={deleteItem} />
      {/* Other components */}
    </div>
  );
};

export default App;


