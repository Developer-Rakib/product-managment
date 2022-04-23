import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='addProduct-conainer'>
            <h2 className="text-4xl my-6 text-sky-600 text-center">Add New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <input placeholder='Enter Product Name' {...register("name", { required: true })} />
                <input placeholder='Enter Product Image Link' {...register("imgLink", { required: true })} />
                <input placeholder='Enter Color'  {...register("color", { required: true })} />
                <input placeholder='Enter Product Price' type="number" {...register("price")} />
                <input className='cursor-pointer' type="submit" value={"Add Product"} />
            </form>
        </div>
    );
};

export default AddProduct;