import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';

const Home = () => {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);
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