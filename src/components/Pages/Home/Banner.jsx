import React from 'react'
import {Link} from 'react-router-dom'

function Banner() {
    return (
        <div>

        <div className='container justify-center items-center mx-auto w-[95%] p-4'>
            <div className='w-7/12 flex flex-col gap-[15px] justify-center'>
             <h1 className='text-5xl font-bold'>Manage Your Product <br/> Easy Way </h1>
             <h3 className='text-xl'> Getting Started</h3>
             <Link className='btn rounded-full shadow-lg text-black mt-[15px]' to='/inventory'> Manage Inventory</Link>
            </div>
            {/* Right Side   */}
            <div className='w-5/12'>
                <img src='https://i.imgur.com/xjh3q35.png' alt='Banner Image' className='w-full' />
            </div>
        </div>

        </div>
    )
}

export default Banner