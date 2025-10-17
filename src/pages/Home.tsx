import {Link} from "react-router-dom"

export default function Home() {
    return (
        <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    Welcome to ZooStore
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Your one-stop shop for pets and pet
                    supplies</p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                        to="/pets"
                        className="px-8 py-3 bg-teal-500 hover:bg-teal-600 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors"
                    >
                        Browse Pets
                    </Link>
                    <Link
                        to="/products"
                        className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
                    >
                        Shop Products
                    </Link>
                </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
                    <div className="text-4xl mb-4">🐾</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Healthy Pets</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        All our pets are healthy, vaccinated, and ready for their new home
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
                    <div className="text-4xl mb-4">🛍️</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Quality Products</h3>
                    <p className="text-gray-600 dark:text-gray-400">Premium pet supplies from trusted brands at great
                        prices</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
                    <div className="text-4xl mb-4">💚</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Expert Care</h3>
                    <p className="text-gray-600 dark:text-gray-400">Our team provides ongoing support and advice for pet
                        care</p>
                </div>
            </div>

            {/* CTA Section */}
            <div
                className="bg-gradient-to-r from-teal-500 to-blue-500 dark:from-emerald-600 dark:to-teal-600 rounded-xl p-8 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Find Your New Friend?</h2>
                <p className="text-lg mb-6 opacity-90">Browse our selection of adorable pets looking for loving
                    homes</p>
                <Link
                    to="/pets"
                    className="inline-block px-8 py-3 bg-white text-teal-600 dark:text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                    Explore Pets
                </Link>
            </div>
        </div>
    )
}
