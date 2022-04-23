import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import './AddProduct.css'

const AddProduct = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/products", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Successfully product added!', { id: "added" })
                }
            })
    };

    return (
        <div className='addProduct-conainer'>
            <h2 className="text-4xl my-6 text-gray-600 border-b-4 inline-block px-8 pb-2 border-sky-500 text-center tracking-tight">Add New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <input placeholder='Enter Product Name' {...register("name", { required: true })} />
                <input placeholder='Enter Product Image Link' {...register("imageSrc", { required: true })} />
                <input placeholder='Enter Color'  {...register("color", { required: true })} />
                <input placeholder='Enter Product Price' type="number" {...register("price")} />
                <input className='cursor-pointer' type="submit" value={"Add Product"} />
            </form>
        </div>
    );
};

export default AddProduct;