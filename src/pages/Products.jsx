import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";

function Products() {
    const[products, setProducts]=useState([]);

    useEffect(()=>{
        async function fetchProducts(){
            try{
                const data = await getProducts();
                setProducts(data);

            }
            catch(error){
                console.error(error);
            }}
            fetchProducts();},[]);

              return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-xl shadow-md p-5 flex flex-col justify-between transition-colors duration-300"
            >
              <div>
                <div className="h-64 bg-slate-100 dark:bg-slate-900 flex items-center justify-center rounded-lg p-2 border border-slate-200 dark:border-slate-800">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h2 className="text-xl font-bold mt-4 text-slate-900 dark:text-slate-100">
                  {product.title}
                </h2>

                <p className="text-slate-600 dark:text-slate-300 mt-2 line-clamp-3">
                  {product.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                <p className="font-bold text-green-600 dark:text-emerald-400 text-lg">
                  ${product.price}
                </p>
                <p className="text-slate-700 dark:text-slate-300 font-medium">⭐ {product.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;