import { useEffect, useState } from "react"
import { fetchProducts } from "../api/api"
import axios from "axios"
import { Link } from "react-router-dom"
function HomePage() {
    const [products, setProducts] = useState([])
useEffect(() => {
     const loadProducts = async() =>{
        const response = await fetchProducts()
        setProducts(response.data)
     }
     loadProducts()
},[])
    return <div className="p-4">
 <div className="flex justify-between items-center mb-6">
  <h1 className="text-xl font-semibold">Товары</h1>
  <Link
  to="/cart"
  className="flex flex-col items-center text-gray-700 hover:text-gray-900 transition"
>
  <span className="text-3xl">🛒</span>
  <span className="text-sm font-medium">Корзина</span>
</Link>
</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map(product => (
                <Link to={`/product/${product.id}`} key ={product.id} className ="block border p-4 rounded hover:shadow-lg transition">
                    <img src = {product.image} alt={product.title} className="h-48 w-full object-contain"/>
                    <h2 className="font-semibold mt-2">{product.title}</h2>
                    <p className="text-lg font-bold">{product.price} $</p>
                    </Link>
                ))}    
        </div>
    </div>

}
export default  HomePage