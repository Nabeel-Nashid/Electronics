import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="w-full h-full bg-[#E5E4E2]">
      <div className="max-w-[900px] ite mx-auto">
        <div>
          <div className="flex flex-col justify-around">
            <h1 className="text-center text-4xl  items-center font-bold mt-5">
              Products
            </h1>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-2 my-3">
              <Link to={"/product"}>
                <div class="mx-auto mt-11 sm:w-48 w-36 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                  <img
                    class="h-44 w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Product Image"
                  />
                  <div class="p-4">
                    <h2 class="mb-2 sm:text-lg text-sm font-medium dark:text-white text-gray-900">
                      Product Name
                    </h2>
                    <p class="mb-2 sm:text-base text-xs dark:text-gray-300 text-gray-700">
                      Product description goes here.
                    </p>
                    <div class="flex items-center">
                      <p class="mr-2 sm:text-lg text-base font-semibold text-gray-900 dark:text-white">
                        $20.00
                      </p>
                      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                        $25.00
                      </p>
                      
                    </div>
                    <p class=" sm:text-base text-xs font-medium text-green-500">
                      20% off
                    </p>
                  </div>
                </div>
              </Link>
              <Link to={"/product"}>
                <div class="mx-auto mt-11 sm:w-48 w-36 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                  <img
                    class="h-44 w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                    alt="Product Image"
                  />
                  <div class="p-4">
                    <h2 class="mb-2 sm:text-lg text-sm font-medium dark:text-white text-gray-900">
                      Product Name
                    </h2>
                    <p class="mb-2 sm:text-base text-xs dark:text-gray-300 text-gray-700">
                      Product description goes here.
                    </p>
                    <div class="flex items-center">
                      <p class="mr-2 sm:text-lg text-base font-semibold text-gray-900 dark:text-white">
                        $20.00
                      </p>
                      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                        $25.00
                      </p>
                     
                    </div>
                    <p class=" sm:text-base text-xs font-medium text-green-500">
                      20% off
                    </p>
                  </div>
                </div>
              </Link>

              <Link to={"/product"}>
                <div class="mx-auto mt-11 sm:w-48 w-36 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                  <img
                    class="h-44 w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                    alt="Product Image"
                  />
                  <div class="p-4">
                    <h2 class="mb-2 sm:text-lg text-sm font-medium dark:text-white text-gray-900">
                      Product Name
                    </h2>
                    <p class="mb-2 sm:text-base text-xs dark:text-gray-300 text-gray-700">
                      Product description goes here.
                    </p>
                    <div class="flex items-center">
                      <p class="mr-2 sm:text-lg text-base font-semibold text-gray-900 dark:text-white">
                        $20.00
                      </p>
                      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                        $25.00
                      </p>

                    </div>
                    <p class=" sm:text-base text-xs font-medium text-green-500">
                      20% off
                    </p>
                  </div>
                </div>
              </Link>

              <Link to={"/product"}>
                <div class="mx-auto mt-11 sm:w-48 w-36 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                  <img
                    class="h-44 w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                    alt="Product Image"
                  />
                  <div class="p-4">
                    <h2 class="mb-2 sm:text-lg text-sm font-medium dark:text-white text-gray-900">
                      Product Name
                    </h2>
                    <p class="mb-2 sm:text-base text-xs dark:text-gray-300 text-gray-700">
                      Product description goes here.
                    </p>
                    <div class="flex items-center">
                      <p class="mr-2 sm:text-lg text-base font-semibold text-gray-900 dark:text-white">
                        $20.00
                      </p>
                      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                        $25.00
                      </p>
                      
                    </div>
                    <p class=" sm:text-base text-xs font-medium text-green-500">
                      20% off
                    </p>
                  </div>
                </div>
              </Link>

              <Link to={"/product"}>
                <div class="mx-auto mt-11 sm:w-48 w-36 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                  <img
                    class="h-44 w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="Product Image"
                  />
                  <div class="p-4">
                    <h2 class="mb-2 sm:text-lg text-sm font-medium dark:text-white text-gray-900">
                      Product Name
                    </h2>
                    <p class="mb-2 sm:text-base text-xs dark:text-gray-300 text-gray-700">
                      Product description goes here.
                    </p>
                    <div class="flex items-center">
                      <p class="mr-2 sm:text-lg text-base font-semibold text-gray-900 dark:text-white">
                        $20.00
                      </p>
                      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                        $25.00
                      </p>
                      
                    </div>
                    <p class=" sm:text-base text-xs font-medium text-green-500">
                      20% off
                    </p>
                  </div>
                </div>
              </Link>

              <Link to={"/product"}>
                <div class="mx-auto mt-11 sm:w-48 w-36 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                  <img
                    class="h-44 w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80"
                    alt="Product Image"
                  />
                  <div class="p-4">
                    <h2 class="mb-2 sm:text-lg text-sm font-medium dark:text-white text-gray-900">
                      Product Name
                    </h2>
                    <p class="mb-2 sm:text-base text-xs dark:text-gray-300 text-gray-700">
                      Product description goes here.
                    </p>
                    <div class="flex items-center">
                      <p class="mr-2 sm:text-lg text-base font-semibold text-gray-900 dark:text-white">
                        $20.00
                      </p>
                      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                        $25.00
                      </p>
                      
                    </div>
                    <p class=" sm:text-base text-xs font-medium text-green-500">
                      20% off
                    </p>
                  </div>
                </div>
              </Link>

              <Link to={"/product"}>
                <div class="mx-auto mt-11 sm:w-48 w-36 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                  <img
                    class="h-44 w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                    alt="Product Image"
                  />
                  <div class="p-4">
                    <h2 class="mb-2 sm:text-lg text-sm font-medium dark:text-white text-gray-900">
                      Product Name
                    </h2>
                    <p class="mb-2 sm:text-base text-xs dark:text-gray-300 text-gray-700">
                      Product description goes here.
                    </p>
                    <div class="flex items-center">
                      <p class="mr-2 sm:text-lg text-base font-semibold text-gray-900 dark:text-white">
                        $20.00
                      </p>
                      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                        $25.00
                      </p>
                     
                    </div>
                    <p class=" sm:text-base text-xs font-medium text-green-500">
                      20% off
                    </p>
                  </div>
                </div>
              </Link>

              <Link to={"/product"}>
                <div class="mx-auto mt-11 sm:w-48 w-36 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                  <img
                    class="h-44 w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Product Image"
                  />
                  <div class="p-4">
                    <h2 class="mb-2 sm:text-lg text-sm font-medium dark:text-white text-gray-900">
                      Product Name
                    </h2>
                    <p class="mb-2 sm:text-base text-xs dark:text-gray-300 text-gray-700">
                      Product description goes here.
                    </p>
                    <div class="flex items-center">
                      <p class="mr-2 sm:text-lg text-base font-semibold text-gray-900 dark:text-white">
                        $20.00
                      </p>
                      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                        $25.00
                      </p>
                      
                    </div>
                    <p class=" sm:text-base text-xs font-medium text-green-500">
                      20% off
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
