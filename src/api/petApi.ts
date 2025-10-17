import {apiFetch} from "@/api/api"

import type {Pet} from "@/types/entity.ts"

const BASE = "/api/pets"

export const petApi = {
    getAll: () => apiFetch<Pet[]>(`${BASE}`),

    getById: (id: number) => apiFetch<Pet>(`${BASE}/${id}`),

    create: (data: Omit<Pet, "id">) =>
        apiFetch<Pet>(`${BASE}`, {
            method: "POST",
            body: JSON.stringify(data),
        }),

    update: (id: number, data: Partial<Pet>) =>
        apiFetch<Pet>(`${BASE}/${id}`, {
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
