import React from "react";
import useFetch from "../../../Hooks/useFetch";
import Loading from "../../Shared/Loading";
import { Link } from "react-router-dom";
import useDynamicTitle from "../../../Hooks/useDynamicTitle";

function Blogs() {
    const [blogs, loading, err] = useFetch(
        "https://mern-inventory-manager-api.herokuapp.com/blogs"
    );
    useDynamicTitle("Explore All Blogs");
    return (
        <div className="max-w-[720px] w-[95%] mx-auto mt-[40px]">
            {loading && <Loading />}
            <h2 className="py-2 text-center text-2xl text-blue-800"> All Blogs </h2>
            <hr />
            <br />
            <br />
            <p className="text-gray-600 mb-3">Total Blogs Found : {blogs.length} </p>
            {blogs?.map((blog) => {
                const { _id, question, answer, imgUrl } = blog;
                return (
                    <Link to={`${_id}`} className="flex w-full mb-4" key={_id}>
                        <div class="flex flex-col items-center w-full bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img
                                class="h-[250px] w-full  rounded-t-lg md:h-[100%] md:w-48 md:rounded-none md:rounded-l-lg"
                                src={imgUrl}
                                alt={question}
                            />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {question}
                                </h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {answer?.slice(0, 50)}
                                </p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Blogs;
