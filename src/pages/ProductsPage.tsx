import {useState} from "react"
import {useProducts} from "../hooks/useProducts"
import ProductCard from "../components/ProductCard"
import Spinner from "../components/Spinner"
import ErrorBlock from "../components/ErrorBlock"
import {ProductForm} from "../components/ProductForm"
import type {Product} from "../types/entity.ts"
import {useNotifications} from "../hooks/useNotifications"
import {Plus, Search} from "lucide-react"

export default function ProductsPage() {
    const {products, loading, error, createProduct, refetch} = useProducts()
    const {addNotification} = useNotifications()
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [categoryFilter, setCategoryFilter] = useState<string>("all")
    const [sortBy, setSortBy] = useState<"name" | "price">("name")

    const handleCreate = async (data: Omit<Product, "id">) => {
        try {
            await createProduct(data)
            setShowCreateModal(false)
            addNotification(
                "Success!",
                "Product successfully added",
                "default"
            )
        } catch (err: unknown) {
            if (err instanceof Error) console.error(err.message)
            addNotification(
                "Error",
                "Failed to create product",
                "destructive"
            )
        }
    }

    const categories = Array.from(new Set(products?.map((p) => p.category).filter(Boolean))) as string[]

    const filteredProducts = products
        ?.filter((product) => {
            const matchesSearch =
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
            return matchesSearch && matchesCategory
        })
        .sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name)
            if (sortBy === "price") return a.price - b.price
            return 0
        })

    if (loading) return <Spinner/>
    if (error) return <ErrorBlock message={error} onRetry={refetch}/>

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Our products</h1>
                        <p className="text-muted-foreground">Quality products for your pets</p>
                    </div>
                    <button
                        onClick={() => setShowCreateModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded-lg transition-colors font-medium shadow-md"
                    >
                        <Plus className="w-5 h-5"/>
                        Add product
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"/>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-teal-500 dark:focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-teal-500 dark:focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    >
                        <option value="all">All categories</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "name" | "price")}
                        className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-teal-500 dark:focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    >
                        <option value="name">By name</option>
                        <option value="price">By price</option>
                    </select>
                </div>
            </div>

            {filteredProducts && filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                        {searchQuery || categoryFilter !== "all" ? "Products not found" : "Products not available yet"}
                    </p>
                </div>
            )}

            {showCreateModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-card rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                        <h2 className="text-xl font-bold mb-4 text-card-foreground">Add new product</h2>
                        <ProductForm onSubmit={handleCreate} onCancel={() => setShowCreateModal(false)}/>
                    </div>
                </div>
            )}
        </div>
    )
}