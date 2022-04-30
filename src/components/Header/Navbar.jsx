import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className={`lg:sm:px-[80px] px-[10%] shadow-md flex justify-between items-center py-[15px] sm:py-3`}
        >
            <div className="logo">
                <Link to="/" className='cursor-pointer'>
                    <h3 className="text-xl ">I/W Management</h3>
                </Link>
            </div>

            <div className={`flex gap-[25px] hidden md:block ${toggle ? ' flex-col w-full h-screen absolute top-0 left-0 right-0 bottom-0 bg-black text-white gap-15px align-items-center' : ' '}`}>
                <NavLink onClick={() => setToggle(false)} className="navLink" to="/blogs">
                    Blogs{" "}
                </NavLink>
                <NavLink onClick={() => setToggle(false)} className="navLink" to="/inventory">
                    Manage Inventory
                </NavLink>
                <Link onClick={() => setToggle(false)} className="ml-[25px] btn bg-blue-800 text-white" to="/login">
                    Login
                </Link>
            </div>

            <div className="md:hidden cursor-pointer" onClick={() => setToggle(!toggle)} >
                {toggle ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[35px] w-[35px] hover:text-red-900 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-[35px] w-[35px] hover:text-red-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    )}
            </div>
        </nav>
    );
}

export default Navbar;