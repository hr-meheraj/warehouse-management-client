import React from 'react'
import {Link} from 'react-router-dom'
import useFetch from '../../../Hooks/useFetch';
import Loading from '../../Shared/Loading';
function SingleBlog() {
    const [blogs, loading, err] = useFetch(
        "https://mern-inventory-manager-api.herokuapp.com/blogs/626f8a4aa24f84fd8906a63f"
    );
    const { _id, imgUrl, question,answer} = blogs;
    return (
        <div className='mt-[20px] mx-auto max-w-[720px] w-[95%]'>
            {
                loading && <Loading/>
            }
            <h2 className='mb-[15px] text-2xl '><Link to='/blogs' >Blogs  </Link> </h2>
            <Link to={`/blogs/${_id}`} className="flex w-full mb-4" key={_id}>
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
            <div className='text-center mt-[20px]'>
                <Link className='btn bg-blue-600 hover:bg-blue-900 text-white rounded-md ' to='/blogs'> Explore All Blogs </Link>
            </div>
        </div>
    )
}

export default SingleBlog
