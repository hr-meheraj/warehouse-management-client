import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../../Firebase/firebase.config';
import axios from 'axios'
function AddNew() {
    const [user, loading] = useAuthState(auth);
    const handleProductSubmitToAdd = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const url = event.target.url.value;
        const sellerName = event.target.sellerName.value;
        const description = event.target.description.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const productsInfo = {
            title, url, email : user.email, description, sellerName, quantity,price
        }
        axios.post('https://mern-stack-inventory-management.hrmeheraj.repl.co/inventory', {
            ...productsInfo
        }).then( res => console.log(res))
        .catch( err => console.log(err));
    }
    return (
        <div className=''>
            <div className='container mt-[40px] w-[95%] mx-auto max-w-[720px] bg-white rounded-md shadow-lg'>
                <form className='w-full p-4' onSubmit={handleProductSubmitToAdd}>
                    <input type='text' className='bg-[#c19e9e2b] mb-3 py-2 px-4 w-full block shadow-sm ' required placeholder='Enter your title ' name='title' />
                    <input type='url' className='bg-[#c19e9e2b] mb-3 py-2 px-4 w-full block shadow-sm' required placeholder='Paste valid Image URL here ' name='url'/>
                    <div className='flex gap-[15px]'>
                     <input type='text' className='bg-[#c19e9e2b] mb-3 py-2 px-4 w-8/12 shadow-sm block' required placeholder='Seller Name' name='sellerName'/>
                     <input type='number' max='20' min='1' className='bg-[#c19e9e2b] mb-3 py-2 px-4 w-8/12 block shadow-sm' required placeholder='Quantity' name='quantity'/>
                    </div>
                    <input className='bg-[#c19e9e2b] w-full mb-3 block py-2 px-4 shadow-sm ' required type='number' name='price' placeholder='Enter $ Price'/>
                    <textarea name="description" id="" cols="30" className='bg-[#c19e9e2b]  block mb-3 w-full block shadow-sm py-2 px-4' required placeholder='Please enter Description about your products' rows="10"></textarea>
                    <input className=' w-full btn bg-pink-700 hover:bg-pink-900 text-center shadow-sm text-white mt-3' type='submit' value="Add Product"/>
                </form>
            </div>
        </div>
    )
}

export default AddNew
