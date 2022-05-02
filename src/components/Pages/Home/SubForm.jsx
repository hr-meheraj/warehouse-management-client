import React from 'react';
import {toast} from 'react-hot-toast'
const SubForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        toast.success('Your Request is Pending');
    }
    return(
        <div className='w-full py-[40px] my-[40px]'>
            <form className='max-w-[720px] text-white sub-form mx-auto w-[95%]' onSubmit={handleSubmit}>
                <h2 className='mb-4 text-2xl'> Request for Admin </h2> 
                <input className='py-2 block w-full px-4 font-normal focus:ring-2 focus:ring-pink-800 rounded-md ' required placeholder='enter your email'/>
                <input type='submit' value='Request' className='my-3 btn bg-blue-700'/>
            </form>
        </div>
    )
}

export default SubForm;