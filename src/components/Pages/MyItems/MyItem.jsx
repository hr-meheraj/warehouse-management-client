import React, { useState, useEffect } from 'react';
import {signOut} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.config';
// import useFetch from '../../../Hooks/useFetch';
import Loading from '../../Shared/Loading';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function MyItem() {
    const [user, authLoading] = useAuthState(auth);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const url = `https://mern-stack-inventory-management.hrmeheraj.repl.co/productsByEmail?email=${user.email}`; 
    // const [data, loading, err, setData] = useFetch();

    const getApi = async () => {
        try{
            setLoading(true);
            const {data} = await axios.get(url, {
                headers : {
                    authorization : `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            setData(data);
        }catch(err){
            console.log('err from the my items', err);
            if(err.response.status === 403 || err.response.status === 401){
                signOut(auth);
                navigate('/login');
            }
        }finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        getApi();
    }, [url])

    const handleDeletePost = async id => {
        const procced = await window.confirm("Do you want to Delete this Item?");
        if (procced) {
            await axios.delete(`https://mern-stack-inventory-management.hrmeheraj.repl.co/product/${id}`)
                .then(res => {
                    console.log(res);
                    const remaining = data.filter(e => e._id !== id);
                    setData(remaining);
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <div>
            {
                (authLoading || loading) && <Loading/>
            }

            <div className='container mt-[30px] max-w-[720px] mx-auto w-[95%]'>
                {/* Table Here */ }
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                 Product Name
                </th>
                                <th scope="col" class="px-6 py-3">
                                    Seller
                </th>
                                <th scope="col" class="px-6 py-3">
                                    Quantity
                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(eachData => {
                                    const { _id, price, title, sellerName, quantity } = eachData;
                                    return (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                <Link to={`/inventory/${_id}`}>{title}</Link>
                                            </th>
                                            <td class="px-6 py-4">
                                                {sellerName}
                                            </td>
                                            <td class="px-6 py-4">
                                                {quantity}
                                            </td>
                                            <td class="px-6 py-4">
                                                ${price}
                                            </td>
                                            <td class="px-6 py-4 text-right">
                                                <button onClick={() => handleDeletePost(_id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })
                                }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyItem
