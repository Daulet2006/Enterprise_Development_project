import {apiFetch} from "@/api/api"
import type {Product} from "@/types/entity.ts"

const BASE = "/api/products"

export const productApi = {
    getAll: () => apiFetch<Product[]>(`${BASE}`),
    getById: (id: number) => apiFetch<Product>(`${BASE}/${id}`),
    create: (data: Omit<Product, "id">) =>
        apiFetch<Product>(`${BASE}`, {
            method: "POST",
            body: JSON.stringify(data),
        }),
    update: (id: number, data: Partial<Product>) =>
        apiFetch<Product>(`${BASE}/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
        }),
    delete: (id: number) =>
        apiFetch<void>(
            `${BASE}/${id}`,
            {
                method: "DELETE",
            },
            false,
        ),
}
