function CartPage() {
    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Корзина</h1>
            <p className="text-gray-600 mb-4">Корзина пуста</p>
            <button
            onClick={() => window.history.back()}
            className="text-blue-600 hover:underline cursor-pointer"
            >
                ← На главную
            </button>
        </div>
    )
}
export default CartPage