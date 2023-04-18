import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';

const Filters = ({ selectedCategory, showUnpurchased, onCategoryChange, onUnpurchasedChange }) => {
  const categories = ['Fruits', 'Vegetables', 'Dairy', 'Meat', 'Premade', 'Household', 'Pets', 'Frozen', 'General', 'Bread', 'Snacks']; // Add more categories as needed

  return (
    <div className='printHide'>
      <h2 className='h2' >Filters</h2>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Category</InputLabel>
        <Select
          value={selectedCategory}
          onChange={onCategoryChange}
          label="Category"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControlLabel
        control={
          <Checkbox
            checked={showUnpurchased}
            onChange={onUnpurchasedChange}
            color="primary"
          />
        }
        label="Show Unpurchased Items Only"
      />
      <h2 className='h2' >Your List</h2>
    </div>
  );
};

export default Filters;
