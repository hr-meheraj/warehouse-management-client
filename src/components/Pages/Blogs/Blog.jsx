import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Loading from '../../Shared/Loading';
const Blog = () => {
    const {id } = useParams();
    const [loading,setLoading] = useState(false);
    const [blog, setBlog] = useState({});
    const getBlog = async (blogId) => {
        try{
            setLoading(true);
            const data = await axios.get(`https://mern-stack-inventory-management.hrmeheraj.repl.co/blogs/${blogId}`);
            setBlog(data.data);
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        getBlog(id);
    },[id])
    return(
        <div className='max-w-[720px] w-[95%] mx-auto mt-[40px]'>
            {
                loading && <Loading/>
            }
            <img className='rounded-md w-full block mb-3' src={blog.imgUrl}/>
            <h2 className='text-2xl mb-3'>{blog?.question}</h2>
            <p className='text-gray-700 mb-3'>{blog.answer}</p>
            <span className='mb-3 font-semibold'> Author : {blog.author}</span>
            <p className='flex gap-[15px]'> Author Email : 
                <a href={`mailto:${blog.email}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                    </svg>
              </a>
            </p>
        </div>
    )
}
export default Blog;