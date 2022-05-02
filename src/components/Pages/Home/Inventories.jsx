import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import Loading from "../../Shared/Loading";
function Inventories() {
    const [data, loading, err] = useFetch('https://mern-stack-inventory-management.hrmeheraj.repl.co/products?size=6&page=0')
    return (
        <div>
            {
                loading && <Loading />
            }
            <h2 className="text-center text-blue-800 text-3xl mt-[35px] mb-[20px]">
                Inventory Items{" "}
            </h2>
            <div className="w-[95%] mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
                {data.map((each) => {
                    const { _id, price, title, description, quantity, sellerName, url } = each;
                    return (
                        <div key={_id} className="card max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <img
                                className="rounded-t-lg w-[100%]"
                                src={url}
                                alt={title}
                            />

                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {title}
                                </h5>

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {description}
                                </p>
                                <p className="text-gray-200 font-smibold mb-3"> Seller : {sellerName} </p>
                                <p className="text-pink-600 font-xl font-semibold mb-3">
                                    {" "}
                  Quantity : {quantity}
                                </p>
                                <h2 className="text-3xl font-semibold mb-3 text-white py-2">
                                    Price : ${price}
                                </h2>
                                <Link
                                    to={`/inventory/${_id}`}
                                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Update
                  <svg
                                        className="ml-2 -mr-1 w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Inventories;