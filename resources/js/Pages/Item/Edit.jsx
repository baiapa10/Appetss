// Edit.js

import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Edit = ({ item, categories }) => {
    const [formData, setFormData] = useState({
        name: item.name || '',
        description: item.description || '',
        price: item.price || '',
        category_id: item.category_id || '',
        location: item.location || '',
        stock: item.stock || '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formDataToSend = {
            _method: 'put',
            ...formData,
        };
    
        Inertia.post(route('item.update', { item: item.id }), formDataToSend);
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
            <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
            <select name="category_id" value={formData.category_id} onChange={handleChange}>
            <option value="">Pilih kategori</option>
                                                    <option value="1">Dog - Sell</option>
                                                    <option value="2">Dog - Adopt</option>
                                                    <option value="3">Cat - Sell</option>
                                                    <option value="4">Cat - Adopt</option>
                                                    <option value="5">Fish - Sell</option>
                                                    <option value="6">Fish - Adopt</option>
                                                    <option value="7">Bird - Sell</option>
                                                    <option value="8">Bird - Adopt</option>
                                                    <option value="9">Other - Sell</option>
                                                    <option value="10">Other - Adopt</option>
                                                    <option value="11">Equipment - Sell</option>
            </select>
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
            <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" />
            <input type="file" name="image" onChange={handleImageChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Edit;
