import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className={`lg:sm:px-[80px] px-[10%] shadow-md flex justify-between items-center py-[15px] relative sm:py-3`}
        >
            <div className="logo">
                <Link to="/" className='cursor-pointer'>
                    <h3 className="text-xl ">I/W Management</h3>
                </Link>
            </div>

            <div className={` z-[50] gap-[25px] md:static right-0 left-0 z-[50] justify-center transition-all p-[40px] flex  md:flex-row  
                   ${toggle ? " absolute top-0 bottom-0  gap-[20px] text-white  bg-[#112211aa]  text-[18px] flex-col w-full h-screen " : " absolute top-[-990px]"}`}>
                <NavLink onClick={() => setToggle(false)} className="navLink" to="/blogs">
                    Blogs{" "}
                </NavLink>
                <NavLink onClick={() => setToggle(false)} className="navLink" to="/inventory">
                    Manage Inventory
                </NavLink>
                <Link onClick={() => setToggle(false)} className="ml-[20px] btn text-center bg-blue-800 text-white" to="/login">
                    Login
                </Link>
            </div>

            <div className={`md:hidden cursor-pointer z-100`} onClick={() => setToggle(!toggle)} >
                {toggle ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-[35px] w-[35px] hover:text-pink-800 ${toggle ? "text-white" : ""}`}
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
                            className={`h-[35px] w-[35px] hover:text-pink-800 ${toggle ? "text-white" : ""}`}
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