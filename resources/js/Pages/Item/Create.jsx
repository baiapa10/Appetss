import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Dashboard(props) {
    const { data, setData, errors, post, progress } = useForm({
        name: "",
        description: "",
        category: "",
        price: "",
        location: "",
        image: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(data).forEach(key => formData.append(key, data[key]));
        post(route("items.store"), formData, {
            forceFormData: true,
            onProgress: progressEvent => {
                const percentage = progressEvent.loaded / progressEvent.total * 100;
                console.log(`Current progress: ${percentage}%`);
            },
        });
    }

    function handleImageChange(e) {
        setData('image', e.target.files[0]);
    }

    return (
        <AuthenticatedLayout auth={props.auth} user={props.auth.user} errors={props.errors} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create items</h2>}>
            <Head title="Create Item" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none" href={route("items.index")}>Back</Link>
                            </div>
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    {/* Name Field */}
                                    <div className="mb-4">
                                        <label className="block">Name</label>
                                        <input type="text" className="w-full px-4 py-2" name="name" value={data.name} onChange={(e) => setData("name", e.target.value)} />
                                        {errors.name && <span className="text-red-600">{errors.name}</span>}
                                    </div>
                                    {/* Description Field */}
                                    <div className="mb-4">
                                        <label className="block">Description</label>
                                        <textarea className="w-full rounded" name="description" value={data.description} onChange={(e) => setData("description", e.target.value)} />
                                        {errors.description && <span className="text-red-600">{errors.description}</span>}
                                    </div>
                                    {/* Category Dropdown */}
                                    <div className="mb-4">
                                        <label className="block">Category</label>
                                        <select className="w-full px-4 py-2" name="category" value={data.category} onChange={(e) => setData("category", e.target.value)}>
                                            {/* Example categories, replace with actual options */}
                                            <option value="">Select a category</option>
                                            <option value="books">Books</option>
                                            <option value="electronics">Electronics</option>
                                            <option value="furniture">Furniture</option>
                                        </select>
                                        {errors.category && <span className="text-red-600">{errors.category}</span>}
                                    </div>
                                    {/* Price Field */}
                                    <div className="mb-4">
                                        <label className="block">Price</label>
                                        <input type="number" className="w-full px-4 py-2" name="price" value={data.price} onChange={(e) => setData("price", e.target.value)} />
                                        {errors.price && <span className="text-red-600">{errors.price}</span>}
                                    </div>
                                    {/* Location Field */}
                                    <div className="mb-4">
                                        <label className="block">Location</label>
                                        <input type="text" className="w-full px-4 py-2" name="location" value={data.location} onChange={(e) => setData("location", e.target.value)} />
                                        {errors.location && <span className="text-red-600">{errors.location}</span>}
                                    </div>
                                    {/* Image Selector */}
                                    <div className="mb-4">
                                        <label className="block">Image</label>
                                        <input type="file" className="w-full px-4 py-2" name="image" onChange={handleImageChange} />
                                        {errors.image && <span className="text-red-600">{errors.image}</span>}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="px-6 py-2 font-bold text-white bg-green-500 rounded">Save</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                    </AuthenticatedLayout>
    );
}