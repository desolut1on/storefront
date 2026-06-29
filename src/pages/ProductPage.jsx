import { useNavigate, useParams } from "react-router-dom"
import { fetchProduct } from "../api/api"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
function ProductPage() {
    const navigate = useNavigate()
    const handleGoBack = () => {
         navigate(-1)
    }
    const {id} = useParams()
    const { addToCart } = useContext(CartContext)
    const [product,setProduct] = useState(null)
    useEffect(()=> {
        const loadProduct = async() => {
            const response = await fetchProduct(id)
            setProduct(response.data)
        }
        loadProduct()
    }, [id])
    if(!product) {
        return <div>Загрузка...</div>
    }
    return (
        <div className="max-w-4xl mx-auto p-4">
            <button
            onClick={handleGoBack}
            className="mb-4 text-blue-600 hover:underline cursor-pointer"
            >
                 ← Назад
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="flex items-center justify-center">
                    <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-96 object-contain"
                    />
                </div>

                <div>
                <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                <p className="text-gray-600 mb-2">Категория: {product.category}</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">{product.price} $</p>
                <button 
                 onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    В корзину
                </button>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
            

                {product.rating && (
                    <div className="mt-4 flex items-center gap-2">
                        <span className="text-yellow-500">★</span>
                        <span>{product.rating.rate} /5</span>
                        <span className="text-gray-500">({product.rating.count} отзывов)</span>
                        </div>
                )}
                </div>
            </div>
        </div>
    )
   
  
}
export default ProductPage