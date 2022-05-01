import React from "react";
import { Link } from "react-router-dom";
function Inventories() {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <h2 className="text-center text-blue-800 text-3xl mt-[35px] mb-[20px]">
        Inventory Items{" "}
      </h2>
      <div className="w-[95%] mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
        {arr.map((each) => {
          return (
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img
                class="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt="Inventory"
              />

              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>

                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <p class="text-gray-200 font-smibold mb-3"> Rafiqul Islam </p>
                <p className="text-blue-800 font-xl font-semibold mb-3">
                  {" "}
                  Quantify : 14
                </p>
                <h2 className="text-3xl font-semibold mb-3 text-white py-2">
                  Price : $100{" "}
                </h2>
                <Link
                  to={`/inventory`}
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Inventories;