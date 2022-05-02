import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className="mt-[120px] bg-[#112222]">
            <div className="container mx-auto max-w-[720px] w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 ">
                    <h2 className="text-2xl text-white">MANAGMENT LOGO</h2>
                    <p className="text-gray-400">
                        Get More productive efficient manage your product build with simple
                        easy to use. Moderate Version and Authentication. Keeping Up.
          </p>
                </div>
                <div className="p-4">
                    <h2 className="text-xl text-gray-300"> Popular Link : </h2>
                    <hr />
                    <ul className="list-disc text-blue-300">
                        <li>
                            {' '}
                            <Link to="/add-new"> ADD ITEM </Link>
                        </li>
                        <li>
                            {' '}
                            <Link to="/inventory"> MANAGE </Link>
                        </li>
                        <li>
                            {' '}
                            <Link to="/blogs"> BLOGS</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-around">
                    <a href="https://facebook.com/hr.meheraj.50" target="_blank" rel="noreferrer">
                        <svg
                            className="w-6 h-6 text-blue-500 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                    </a>
                    <a href="https://linkedin.com/hrmeheraj" target="_blank" rel="noreferrer">
                        <svg
                            className="w-6 h-6 text-red-500 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                        </svg>
                        {' '}
                    </a>
                    <a href="https://reddit.com" target="_blank" rel="noreferrer">
                        <svg
                            className="w-6 h-6 text-blue-600 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        {' '}
                    </a>
                </div>
            </div>
            <div className="py-2 text-center mt-[40px] bg-[#112233] font-semibold text-gray-200">
                &copy;
        {' '}
                {date}
                {' '}
        All right reserved by Hr Meheraj
      </div>
        </div>
    );
}

export default Footer;
