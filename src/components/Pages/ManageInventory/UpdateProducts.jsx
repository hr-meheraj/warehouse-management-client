import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {toast } from 'react-hot-toast';
import Loading from '../../Shared/Loading';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';
function UpdateProducts() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [reStockId, setRestockId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    useDynamicTitle(product.title);
    const getApi = async _ => {
        try {
            setLoading(true);
            const res = await axios.get(`https://mern-stack-inventory-management.hrmeheraj.repl.co/inventory/${id}`);
            const data = await res.data;
            setProduct(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getApi();
    }, [])
    const handleDeliverProduct = async (id) => {
        const newQuantity = parseInt(product.quantity) - 1;
        try {
            setLoading(true);
            await axios.put(`https://mern-stack-inventory-management.hrmeheraj.repl.co/inventory/${id}`, {
                quantity: newQuantity
            });
            setProduct({ ...product, quantity: newQuantity })
            toast.success('Successfully Delivered!')
        }
        catch (err) {
            console.log("Err in the Delive", err);
            toast.error('Something went wrong to Deliver')
        } finally {
            // Final
            console.log("Final Deliver");
            setLoading(false);
        }
    }
    const handleRestock = id => {
        setShowForm(true);
        setRestockId(id);
    }

    const handleRestockSubmit = async e => {
        e.preventDefault();
        const newRestockQuantity = parseInt(e.target.quantity.value) + parseInt(product.quantity);
        try {
            setLoading(true);
            await axios.put(`https://mern-stack-inventory-management.hrmeheraj.repl.co/inventory/${reStockId}`, {
                quantity: newRestockQuantity
            });
            setProduct({ ...product, quantity: newRestockQuantity })
            toast.success('Successfully Restocked!')
        } catch (err) {
            console.log('err in the stock', err);
            toast.error('Successfully toasted!')

        } finally {
            //
            setShowForm(false);
            console.log('finally in stock');
            setLoading(false);
        }

    }

    return (
        <div>
            {
                loading && <Loading />
            }
            
            <div className='container mx-auto max-w-[720px] w-[95%] mt-[25px]'>
                <img src={product?.url} className='w-[100%] rounded-md mb-3' alt={product?.title} />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {product?.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {product?.description}
                </p>
                <p className='mb-3'>Seller : {product?.sellerName}</p>
                <h5 className="text-2xl font-semibold mb-3 text-pink-700">Price : ${product?.price}</h5>
                <h5 className='text-xl mb-3'>Quantity : {product?.quantity}</h5>
                {
                    showForm && (
                        <form className='my-3 container mx-auto flex' key={product?._id} onSubmit={handleRestockSubmit}>
                            <input className='py-2 px-4 block w-8/12 rounded-md shadow-md' required type='number' placeholder='Enter Quantity' name='quantity' />
                            <input type='submit' value='Update' className='btn rounded-md text-white shadow-md w-4/12 bg-blue-600 hover:bg-blue-900' />
                        </form>
                    )
                }
                <div className='flex gap-[24px] mb-[140px]'>
                    <button className='btn bg-pink-700 rounded-md hover:bg-pink-900 text-white' onClick={() => handleDeliverProduct(product?._id)}>Deliver</button>
                    <button className='btn bg-blue-600 hover:bg-blue-900 text-white rounded-md' onClick={() => handleRestock(product?._id)}>Restock </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateProducts
