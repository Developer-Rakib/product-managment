import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpgrageProduct = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 1) {
                    toast.success('Successfully product Upgeted!', { id: "added" })
                    navigate('/home')
                }
            })
    };

    return (
        <div className='addProduct-conainer'>
            <h2 className="text-4xl my-6 text-gray-600 border-b-4 inline-block px-8 pb-2 border-sky-500 text-center tracking-tight">Upgrade This Poduct : {id}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <input placeholder='Enter Product Name' {...register("name", { required: true })} />
                <input placeholder='Enter Product Image Link' {...register("imageSrc", { required: true })} />
                <input placeholder='Enter Color'  {...register("color", { required: true })} />
                <input placeholder='Enter Product Price' type="number" {...register("price")} />
                <input className='cursor-pointer' type="submit" value={"Upgrade Product"} />
            </form>
        </div>
    );
};

export default UpgrageProduct;