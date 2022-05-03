import React from 'react';
import {toast} from 'react-hot-toast'
const SubForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        toast.success('Your Request is Pending');
    }
    return(
        <div className='w-full py-[40px] my-[40px] sub-form'>
            <form className='max-w-[720px] text-white  sub-form-main mx-auto w-[95%]' onSubmit={handleSubmit}>
                <h2 className='mb-4 text-2xl'> Request for Admin </h2> 
                <input className='py-2 block w-full text-gray-600 px-4 font-normal focus:ring-2 focus:ring-pink-800 rounded-md ' required placeholder='enter your email'/>
                <input type='submit' value='Request' className='my-3 cursor-pointer btn bg-blue-700 hover:bg-blue-900 transition-all'/>
            </form>
        </div>
    )
}

export default SubForm;