import React from 'react'
import {Link} from 'react-router-dom'

function Banner() {
    return (
        <div className="">
            <div className="container banner flex-col md:flex-row flex px-6 py-4 mx-auto md:h-128 md:py-16">
                <div className="flex flex-col items-center w-full md:flex-row lg:w-1/2">
                    <div className="max-w-lg">
                        <h1 className="text-3xl tracking-wide  text-gray-800 md:text-4xl">Manage your Inventory</h1>
                        <h2 className="text-2xl tracking-wide  text-gray-800 md:text-4xl">Easy Way</h2>
                        <p className="mt-4  text-gray-600">This is the Admin Controlled Website, if you admin you can 
                        just easily manage your order, deliver and restock. If you need considered to delete. Almost every oppurtunity you can get from one place.</p>
                        <div className="mt-6">
                            <Link to='/inventory'
                                className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md lg:inline hover:bg-blue-400">Manage Inventory
                    </Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center p-4 justify-center w-full h-auto lg:w-1/2">
                    <img className="object-fit w-full h-full max-w-2xl rounded-md"
                        src="https://i.imgur.com/xjh3q35.png" alt="Banner photo"/>
        </div>
                </div>
            </div>
    )
}

export default Banner
    // < div >
    // <div className='container flex md:flex-row  flex-col justify-center  items-center mx-auto w-[95%] p-4'>
    //     <div className='w-7/12 order-2 md:order-1 flex flex-col gap-[15px] justify-center'>
    //         <h1 className='text-5xl font-bold'>Manage Your Product <br /> Easy Way </h1>
    //         <h3 className='text-xl text-blue-800 mt-[10px]'> Getting Started</h3>
    //         <Link className='btn w-[200px] hover:bg-blue-800 hover:text-white transtition-all  rounded-full shadow-lg text-black mt-[15px]' to='/inventory'> Manage Inventory</Link>
    //     </div>
    //     {/* Right Side   */}
    //     <div className='w-5/12 order-1 md:order-2 flex justify-center items-center'>
    //         <img src='https://i.imgur.com/xjh3q35.png' alt='Banner Image' className='w-[100%]' />
    //     </div>
    // </div>
    //     </div >
