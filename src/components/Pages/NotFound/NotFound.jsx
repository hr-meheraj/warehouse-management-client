import React from 'react'
import { Link } from 'react-router-dom'
import useDynamicTitle from '../../../Hooks/useDynamicTitle'
function NotFound() {
    useDynamicTitle("Not Found 404 -");
    return (
        <div className='flex justify-center items-center '>
            <div>
                <img src='https://i.ibb.co/jJKq5Gz/526-5264496-404-png-transparent-png-removebg-preview.png' alt="Not Found" className='w-[300px] md:w-[380px] mg:-w-[430px] py-4' />
                <Link className='text-center p-2 block hover:text-blue-900 font-semibold text=[22px]' to='/'>Back to the Home &larr; </Link>
            </div>
        </div>
    )
}

export default NotFound