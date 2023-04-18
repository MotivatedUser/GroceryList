import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';

const Filters = ({ selectedCategory, showUnpurchased, onCategoryChange, onUnpurchasedChange }) => {
  const categories = ['fruits', 'vegetables', 'dairy', 'meat', 'premade', 'household', 'pets', 'frozen', 'general', 'bread', 'snacks']; // Add more categories as needed

  return (
    <div className='printHide'>
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
    </div>
  );
};

export default Filters;
