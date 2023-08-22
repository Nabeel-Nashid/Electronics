import React from "react";

function Products() {
  return (
    <div className="w-full h-screen bg-slate-400">
      <div className="max-w-[900px] ite mx-auto">
        <h1 className="text-center items-center font-bold mb-4">Products</h1>
        <div className="flex justify-around">
          <div className="grid md:grid-cols-6 grid-cols-2 gap-6 ">
            <div className="w-36 h-52 bg-white rounded-lg"></div>
            <div className="w-36 h-52 bg-white rounded-lg"></div>
            <div className="w-36 h-52 bg-white rounded-lg"></div>
            <div className="w-36 h-52 bg-white rounded-lg"></div>
            <div className="w-36 h-52 bg-white rounded-lg"></div>
            <div className="w-36 h-52 bg-white rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
