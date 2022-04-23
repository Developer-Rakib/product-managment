import React from 'react';
import './Product.css'
import { MdDelete } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

const Product = ({ product, handleDelete }) => {
    let navigate = useNavigate();
    const handleUpgrade = (id) => {
        navigate(`/upgrade/${id}`)
    }

    return (
        <div>

            <div className="group relative m-5 text-left">
                <div className="w-60 min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                        src={product.imageSrc}
                        alt=''
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between pl-3 pr-6">
                    <div>
                        <h3 className="text-lg text-gray-700">
                            <p>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                            </p>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <span className="text-lg font-medium text-gray-900">${product.price}</span>
                        <div className='z-10'>
                            <button onClick={() => handleUpgrade(product._id)} className='text-3xl text-gray-500 cursor-pointer mr-2'> <FiEdit></FiEdit> </button>
                            <button onClick={() => handleDelete(product._id)} className='text-3xl text-gray-500 cursor-pointer'> <MdDelete></MdDelete> </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;