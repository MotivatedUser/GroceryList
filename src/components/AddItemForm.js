import React, { useState } from 'react';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

const AddItemForm = ({ addItem }) => {
  const [item, setItem] = useState({ name: '', quantity: '', category: '', purchased: false });

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
    <form onSubmit={handleSubmit} className='printHide addForm'>
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

              <MenuItem value="Fruits">Fruits</MenuItem>
              <MenuItem value="Vegetables">Vegetables</MenuItem>
              <MenuItem value="Meat">Meat</MenuItem>
              <MenuItem value="Premade">Premade</MenuItem>
              <MenuItem value="Dairy">Dairy</MenuItem>
              <MenuItem value="Household">Household</MenuItem>
              <MenuItem value="Pets">Pets</MenuItem>
              <MenuItem value="Frozen">Frozen</MenuItem>
              <MenuItem value="General">General</MenuItem>
              <MenuItem value="Bread">Bread</MenuItem>
              <MenuItem value="Snacks">Snacks</MenuItem>
              
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button type="submit" variant="contained" color="primary" aria-label='AddItem' fullWidth>
            Add Item
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

AddItemForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default AddItemForm;
