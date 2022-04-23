import React from 'react';
import './Product.css'
import { MdDelete } from 'react-icons/md'

const Product = ({ product }) => {
    return (
        <div>

            <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                        src={product.imageSrc}
                        alt=''
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between pl-3 pr-6">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <p>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                            </p>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <div className='flex flex-col'>
                        <span className="text-sm font-medium text-gray-900">{product.price}</span>
                        <button className='text-2xl text-gray-500'> <MdDelete></MdDelete> </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;