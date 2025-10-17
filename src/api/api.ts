export const GLOBAL_API = "http://10.46.29.13:8080"

export async function apiFetch<T>(
    endpoint: string,
    options: RequestInit = {},
    expectJson = true, // Новый param: ожидать ли JSON?
): Promise<T> {
    const res = await fetch(`${GLOBAL_API}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    })

    if (!res.ok) {
        const msg = await res.text()
        throw new Error(msg || `Request failed: ${res.status}`)
    }

    if (expectJson) {
        return res.json() as Promise<T>
    } else {
        return undefined as T
    }
}
