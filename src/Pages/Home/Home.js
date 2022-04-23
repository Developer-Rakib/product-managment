import React from 'react';
import Product from '../Product/Product';

const Home = () => {
    const products = [
        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            price: '$35',
            color: 'Black',

        },
        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            price: '$35',
            color: 'Black',

        },
        {
            id: 1,
            name: 'Basic Tee',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            price: '$35',
            color: 'Black',

        },
        // More products...
    ]
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold  tracking-tight text-gray-600">Customers also purchased</h2>

                <div className="mt-6 flex flex-wrap justify-evenly">
                    {products.map((product) => <Product
                        key={product.id}
                        product={product}
                    ></Product>)}
                </div>
            </div>
        </div>
    );
};

export default Home;