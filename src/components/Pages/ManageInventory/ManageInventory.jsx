import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import useFetch from '../../../Hooks/useFetch'
import axios from 'axios'
import Loading from '../../Shared/Loading';
function ManageInventory() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(0);
    const [itemsFound, setItemsFound] = useState(0);
    const [size, setSize] = useState(6); 
    const [isDelete, setIsDelete] = useState(false);
    const [loading, setLoading] = useState(false);
    const getApi = async (url) => {
        try {
            setLoading(true);
            const response = await axios.get(url);
            setProducts(response.data);
            console.log(response.data);
        } catch (err) {
            console.log("Err here ", err);
        } finally {
            setLoading(false);
        }
    };
    const getPage = async () => {
        try{
            const res = await axios.get(`https://mern-stack-inventory-management.hrmeheraj.repl.co/productsCount`)
            const data = await res.data.count;
            setItemsFound(data);
            const page = Math.ceil(data / size);
            setCount(page);
        }catch(err){
            console.log(err);
        } finally {
            //
        }
    }
    useEffect(() => {
        getPage();
    }, [size])
    
    const handleChangeOption = e => {
        setSize(e.target.value);
    }
    useEffect(() => {
        getApi(
            `https://mern-stack-inventory-management.hrmeheraj.repl.co/products?size=${size}&page=${page}`
        );
    }, [size, page, isDelete]);

    const handleDelete = id => {
        const procced = window.confirm("Do you want to Delete this Item?");
        if(procced){
            axios.delete(`https://mern-stack-inventory-management.hrmeheraj.repl.co/product/${id}`)
                .then(res => {
                    console.log(res);
                    setIsDelete(!isDelete);
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <div className=''>
            {
                loading && <Loading/>
            }
            <div className='text-center my-[30px]'>
            <h2 className='py-3 text-3xl text-blue-800'> Do you want to Add new Item? </h2>  
            <Link to='/add-new' className='btn bg-blue-700 text-white rounded-md hover:bg-blue-900'>Add New Item </Link>
            </div>
           <div className='container mx-auto text-center w-[95%]'>
           <br/>
            <h3 className='text-2xl text-blue-700 mb-3'>Total Inventor Items Found : {itemsFound}</h3>
            <hr/>
            <br/>
           </div>
            <div className='container w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]'>
              {
                    products.map(eachProducts => {
                        const { _id, price, title, description, url, quantity, sellerName } = eachProducts;
                      return(
                          <div key={_id} class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                              <img
                                  class="rounded-t-lg w-[100%]"
                                  src={url}
                                  alt={title}
                              />

                              <div class="p-5">
                                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                   {title}
                </h5>

                                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                     {description}
                </p>
                                  <p class="text-gray-200 font-smibold mb-3"> Seller {sellerName}</p>
                                  <p className="text-blue-800 font-xl font-semibold mb-3">     Quantity : {quantity}
                </p>
                                  <h2 className="text-3xl font-semibold mb-3 text-white py-2">
                                      Price : ${price}
                                  </h2>
                                  <Link
                                      to={`/inventory/${_id}`}
                                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                  >
                                      Update
                  <svg
                                          class="ml-2 -mr-1 w-4 h-4"
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
                                  <button
                                      onClick={() => handleDelete(_id)}
                                      class="inline-flex items-center py-2  px-3 text-sm font-medium text-center ml-3 text-white bg-red-700 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                  >
                                      Delete
                                  </button>
                              </div>
                          </div>
                      )
                  })
              }
           </div>
            <div className='mb-[70px] mt-[25px] container mx-auto max-w-[720px] w-[95%]'>
                {
                    count && [...Array(count).keys()].map(each => {
                        return (
                            <button onClick={() => setPage(each)} className={`shadow-lg py-2 px-4  transition-all hover:bg-blue-900 ${each === page ? "bg-blue-800 text-white " : ""}`}>{each + 1} </button>
                        )
                    })
                }
                <select onChange={handleChangeOption} className='ml-[15px]'>
                    <option value="6">6</option>
                    <option default value="10">
                        10
            </option>
                    <option value="15">15</option>
                </select>
           </div>
        </div>
    )
}

export default ManageInventory

