import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../Shared/Loading";
import useDynamicTitle from "../../../Hooks/useDynamicTitle";
const Blog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState({});
    const handleNavigate = () => {
        navigate(-1);
    };
    const getBlog = async (blogId) => {
        try {
            setLoading(true);
            const data = await axios.get(
                `https://mern-inventory-manager-api.herokuapp.com/blogs/${blogId}`
            );
            setBlog(data.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };
    useDynamicTitle(blog?.question);
    useEffect(() => {
        getBlog(id);
    }, [id]);
    return (
        <div className="max-w-[720px] w-[95%] mx-auto mt-[40px] mb-[80px]">
            <div
                className="fixed top-[64px]  md:top-[100px] left-[10px] md:left-[200px] cursor-pointer w-[60px] h-[60px] rounded-full hover:text-yellow-500 trasition-all "
                onClick={handleNavigate}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 hover:text-yellow-500 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </div>
            {loading && <Loading />}
            <img className="rounded-md w-full block mb-3" src={blog.imgUrl} />
            <h2 className="text-2xl mb-3">{blog?.question}</h2>
            <p className="text-gray-700 mb-3 blog">{blog.answer}</p>
            <span className="mb-3 font-semibold"> Author : {blog.author}</span>
            <p className="flex gap-[15px]">
                {" "}
        Author Email :
        <a href={`mailto:${blog.email}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                        />
                    </svg>
                </a>
            </p>
        </div>
    );
};
export default Blog;
