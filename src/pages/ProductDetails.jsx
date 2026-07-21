import {getProductById} from "../api/productApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() =>{
        async function fetchProduct()
        {
            try
            {
                const data = await getProductById(id);
                setProduct(data);
            }
            catch(error)
            {
                console.error(error);
            }
        }
        fetchProduct();
    }, [id])


    if (!product) {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex items-center justify-center p-8 transition-colors duration-300">
      <h2 className="text-xl font-medium animate-pulse">Loading product details...</h2>
    </div>
  );
}

return (
  <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-8 transition-colors duration-300">
    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">{product.title}</h1>
      <div className="bg-slate-100 dark:bg-slate-950 rounded-lg p-6 flex justify-center mb-6 border border-slate-200 dark:border-slate-800">
        <img src={product.thumbnail} alt={product.title} className="max-h-80 object-contain" />
      </div>
      <p className="text-slate-700 dark:text-slate-300 text-lg mb-6 leading-relaxed">{product.description}</p>
      <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-4">
        <p className="text-2xl font-bold text-green-600 dark:text-emerald-400">${product.price}</p>
        <p className="text-lg font-medium text-slate-700 dark:text-slate-300">⭐ {product.rating}</p>
      </div>
    </div>
  </div>
);};
export default ProductDetails;