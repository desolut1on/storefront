import axios from "axios"
export function fetchProducts() {
  return  axios.get ('https://fakestoreapi.com/products')
}