import React, { useState } from 'react';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AddItemForm = ({ addItem }) => {
  const [item, setItem] = useState({ name: '', quantity: '', category: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setItem({ name: '', quantity: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className='printHide'>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={3}>
          <TextField
            label="Item Name"
            name="name"
            value={item.name}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Quantity"
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth required>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={item.category}
              onChange={handleChange}
            >

              <MenuItem value="fruits">Fruits</MenuItem>
              <MenuItem value="vegetables">Vegetables</MenuItem>
              <MenuItem value="meat">Meat</MenuItem>
              <MenuItem value="premade">Premade</MenuItem>
              <MenuItem value="dairy">Dairy</MenuItem>
              <MenuItem value="household">Household</MenuItem>
              <MenuItem value="frozen">Frozen</MenuItem>
              <MenuItem value="general">General</MenuItem>
              <MenuItem value="bread">Bread</MenuItem>
              <MenuItem value="snacks">Snacks</MenuItem>
              
              {/* Add more categories as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Item
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddItemForm;
