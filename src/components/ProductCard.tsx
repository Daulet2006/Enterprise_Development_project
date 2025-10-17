import {useNavigate} from "react-router-dom"
import type {Product} from "../types/entity.ts"

interface ProductCardProps {
    product: Product
    onEdit?: (product: Product) => void
    onDelete?: (id: number) => void
}

export default function ProductCard({product, onEdit, onDelete}: ProductCardProps) {
    const navigate = useNavigate()

    return (
        <div
            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                    src={product.image || `https://placehold.co/300x300?text=${encodeURIComponent(product.name)}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
        <span
            className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full mb-2">
          {product.category}
        </span>

                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    In stock: {product.quantity} pcs.
                </p>
                <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-teal-600 dark:text-emerald-400">
              {new Intl.NumberFormat(undefined, {
                  style: "currency",
                  currency: "KZT",
                  maximumFractionDigits: 0,
              }).format(product.price)}
          </span>
                </div>

                <div className="flex flex-col gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={() => navigate(`/products/${product.id}`)}
                        className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                    >
                        Details
                    </button>

                    {(onEdit || onDelete) && (
                        <div className="flex gap-2">
                            {onEdit && (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        onEdit(product)
                                    }}
                                    className="flex-1 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-sm font-medium"
                                >
                                    Edit
                                </button>
                            )}
                            {onDelete && (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        onDelete(product.id)
                                    }}
                                    className="flex-1 px-3 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors text-sm font-medium"
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}