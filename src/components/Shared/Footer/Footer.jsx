import React from 'react'

function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className='mt-[120px]'>
            <div className='py-2 text-center bg-[#112233] font-semibold text-gray-200'>
                &copy; {date} All right reserved by Hr Meheraj
            </div>
        </div>
    )
}

export default Footer