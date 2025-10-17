"use client"

import {useState, useEffect, useCallback} from "react"
import {petApi} from "@/api/petApi"
import type {Pet} from "@/types/entity.ts"
import {useFetch} from "@/hooks/useFetch"

function getErrorMessage(err: unknown): string {
    return err instanceof Error ? err.message : "Unknown error occurred"
}

export function usePets() {
    const [pets, setPets] = useState<Pet[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchPets = useCallback(() => {
        setLoading(true)
        petApi
            .getAll()
            .then(setPets)
            .catch((err: unknown) => setError(getErrorMessage(err)))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        fetchPets()
    }, [fetchPets])

    const createPet = useCallback(
        async (data: Omit<Pet, "id">) => {
            try {
                await petApi.create(data)
                fetchPets()
            } catch (err: unknown) {
                setError(getErrorMessage(err))
                throw err
            }
        },
        [fetchPets],
    )

    const updatePet = useCallback(
        async (id: number, data: Partial<Pet>) => {
            try {
                await petApi.update(id, data)
                fetchPets()
            } catch (err: unknown) {
                setError(getErrorMessage(err))
                throw err
            }
        },
        [fetchPets],
    )

    const deletePet = useCallback(
        async (id: number) => {
            try {
                await petApi.delete(id)
                fetchPets()
            } catch (err: unknown) {
                setError(getErrorMessage(err))
                throw err
            }
        },
        [fetchPets],
    )

    return {pets, loading, error, createPet, updatePet, deletePet, refetch: fetchPets}
}

export function usePet(id: number) {
    const fetcher = useCallback(() => petApi.getById(id), [id])
    const {data: pet, loading, error, refetch} = useFetch(fetcher)

    useEffect(() => {
        if (isNaN(id)) {
            console.error("Invalid pet ID")
        }
    }, [id])

    return {pet, loading, error: error || (isNaN(id) ? "Invalid ID" : null), refetch}
}
