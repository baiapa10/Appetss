import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Box, Button, FormControl, FormLabel, Input, Select, Textarea } from '@chakra-ui/react';

const EditItemForm = ({ item }) => {
  const [formData, setFormData] = useState({
    name: item.name,
    description: item.description,
    price: item.price,
    category_id: item.category_id,
    location: item.location,
    stock: item.stock,
    image: item.image, 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post(`/item/${item.id}/update`, formData);
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} />
      </FormControl>

      <FormControl isRequired mt={4}>
        <FormLabel htmlFor="description">Description</FormLabel>
        <Textarea id="description" name="description" value={formData.description} onChange={handleChange} />
      </FormControl>

      <FormControl isRequired mt={4}>
        <FormLabel htmlFor="price">Price</FormLabel>
        <Input id="price" name="price" type="number" value={formData.price} onChange={handleChange} />
      </FormControl>

      <FormControl isRequired mt={4}>
        <FormLabel htmlFor="category_id">Category</FormLabel>
        <Select id="category_id" name="category_id" value={formData.category_id} onChange={handleChange}>
          {/* Categories options should be fetched or passed from the parent component */}
        </Select>
      </FormControl>

      <FormControl isRequired mt={4}>
        <FormLabel htmlFor="location">Location</FormLabel>
        <Input id="location" name="location" value={formData.location} onChange={handleChange} />
      </FormControl>

      <FormControl isRequired mt={4}>
        <FormLabel htmlFor="stock">Stock</FormLabel>
        <Input id="stock" name="stock" type="number" value={formData.stock} onChange={handleChange} />
      </FormControl>

      {/* Image editing can be added here if needed */}
      <FormControl isRequired mt={4}>
    <FormLabel htmlFor="image">Image</FormLabel>
    <Input id="image" name="image" type="file" onChange={handleChange} />
</FormControl>

      <Button mt={4} colorScheme="blue" type="submit">Update Item</Button>
    </Box>
  );
};

export default EditItemForm;