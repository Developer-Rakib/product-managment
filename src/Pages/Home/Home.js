import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import toast from 'react-hot-toast';


const Home = () => {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleDelete = (id) => {
        let url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    let remening = products.filter(pr => pr._id !== id)
                    setProducts(remening)
                    toast.success('Successfully deleted!', { id: "delete" })
                }
            })
    }
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto px-4  sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-4xl my-6 text-gray-600 border-b-4 inline-block px-8 pb-2 border-sky-500 text-center tracking-tight">Customers also purchased</h2>
                <div className=" flex flex-wrap justify-evenly">
                    {products.map((product) => <Product
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                    ></Product>)}
                </div>
            </div>
        </div>
    );
};

export default Home;