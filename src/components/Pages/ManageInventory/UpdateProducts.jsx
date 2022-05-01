import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../Shared/Loading';
function UpdateProducts() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [reStockId, setRestockId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
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
    }, [isUpdate])
    let { _id, email, price, url, title, sellerName, quantity, description } = product;
    const handleDeliverProduct = (id) => {
        if (quantity >= 1) {
            const newQuantity = quantity - 1;
            axios.put(`https://mern-stack-inventory-management.hrmeheraj.repl.co/inventory/${id}`, {
                quantity: newQuantity
            })
                .then(res => {
                    console.log(res);
                    setIsUpdate(!isUpdate);
                    quantity = newQuantity;
                })
                .catch(err => console.log(err))
        }
    }
    const handleRestock = id => {
        setShowForm(true);
        setRestockId(id);
    }
    const handleRestockSubmit = e => {
        e.preventDefault();
        console.log("Form Submit");
        console.log(reStockId);
        const newRestockQuantity = e.target.quantity.value;
        console.log(newRestockQuantity);
        axios.put(`https://mern-stack-inventory-management.hrmeheraj.repl.co/inventory/${reStockId}`, {
            quantity: newRestockQuantity
          })
            .then(res => {
                console.log(res);
                quantity = newRestockQuantity;
                setShowForm(false);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                loading && <Loading />
            }
            <div className='container mx-auto max-w-[720px] w-[95%]'>
                <img src={url} className='w-[100%] rounded-md mb-3' alt={title}/>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {title}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <p className='mb-3'>Seller : {sellerName}</p>
                <h5 className="text-2xl font-semibold mb-3 text-pink-700">Price : ${price}</h5>
                <h5 className='text-xl mb-3'>Quantity : {quantity}</h5>
                {
                    showForm && (
                        <form className='my-3 container mx-auto flex' key={_id}onSubmit={handleRestockSubmit}>
                            <input className='py-2 px-4 block w-8/12 rounded-md shadow-md' required type='number' placeholder='Enter Quantity' name='quantity' />
                            <input type='submit' value='Update' className='btn rounded-md text-white shadow-md w-4/12 bg-blue-600 hover:bg-blue-900' />
                        </form>
                    )
                }
                <div className='flex gap-[25px] mb-[140px]'>
                    <button className='btn bg-pink-700 rounded-md hover:bg-pink-900 text-white' onClick={() => handleDeliverProduct(_id)}>Deliver</button>
                    <button className='btn bg-blue-600 hover:bg-blue-900 text-white rounded-md' onClick={() => handleRestock(_id)}>Restock </button>
                </div>
            </div>
        </div>
    )
}


export default UpdateProducts
