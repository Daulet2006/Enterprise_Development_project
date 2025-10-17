// src/hooks/useFetch.ts (улучшенный)
import {useState, useEffect} from "react"

function getErrorMessage(err: unknown): string {
    return err instanceof Error ? err.message : "Unknown error occurred"
}

interface UseFetchResult<T> {
    data: T | null
    loading: boolean
    error: string | null
    refetch: () => void
}

export function useFetch<T>(fetcher: () => Promise<T>): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [trigger, setTrigger] = useState(0)

    useEffect(() => {
        let cancelled = false

        setLoading(true)
        setError(null)

        fetcher()
            .then((result) => {
                if (!cancelled) {
                    setData(result)
                    setLoading(false)
                }
            })
            .catch((err) => {
                if (!cancelled) {
                    setError(getErrorMessage(err))
                    setLoading(false)
                }
            })

        return () => {
            cancelled = true
        }
    }, [fetcher, trigger])

    const refetch = () => setTrigger((prev) => prev + 1)

    return {data, loading, error, refetch}
}