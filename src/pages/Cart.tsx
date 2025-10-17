export default function Cart() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">Shopping Cart</h1>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
                <div className="text-6xl mb-4">🛒</div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Your cart is empty</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Start shopping to add items to your cart</p>
                <div className="flex gap-4 justify-center">
                    <a
                        href="/pets"
                        className="px-6 py-3 bg-teal-500 hover:bg-teal-600 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors"
                    >
                        Browse Pets
                    </a>
                    <a
                        href="/products"
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
                    >
                        Shop Products
                    </a>
                </div>
            </div>
        </div>
    )
}
