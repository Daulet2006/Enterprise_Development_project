import {useState, useEffect, useCallback} from "react"
import {productApi} from "../api/productApi"
import type {Product} from "../types/entity.ts"
import {useFetch} from "@/hooks/useFetch.ts";

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchProducts = useCallback(() => {
        setLoading(true)
        productApi
            .getAll()
            .then(setProducts)
            .catch((err: unknown) => {
                if (err instanceof Error) setError(err.message)
                else setError("Unknown error occurred")
            })
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    const createProduct = useCallback(
        async (data: Omit<Product, "id">) => {
            try {
                await productApi.create(data)
                fetchProducts()
            } catch (err: unknown) {
                if (err instanceof Error) setError(err.message)
                else setError("Unknown error occurred")
                throw err
            }
        },
        [fetchProducts],
    )

    const updateProduct = useCallback(
        async (id: number, data: Partial<Product>) => {
            try {
                await productApi.update(id, data)
                fetchProducts()
            } catch (err: unknown) {
                if (err instanceof Error) setError(err.message)
                else setError("Unknown error occurred")
                throw err
            }
        },
        [fetchProducts],
    )

    const deleteProduct = useCallback(
        async (id: number) => {
            try {
                await productApi.delete(id)
                fetchProducts()
            } catch (err: unknown) {
                if (err instanceof Error) setError(err.message)
                else setError("Unknown error occurred")
                throw err
            }
        },
        [fetchProducts],
    )

    return {products, loading, error, createProduct, updateProduct, deleteProduct, refetch: fetchProducts}
}

export function useProduct(id: number) {
    const fetcher = useCallback(() => productApi.getById(id), [id])
    const {data: product, loading, error, refetch} = useFetch(fetcher)

    useEffect(() => {
        if (isNaN(id)) {
            console.error("Invalid product ID")
        }
    }, [id])

    return {product, loading, error: error || (isNaN(id) ? "Invalid ID" : null), refetch}
}