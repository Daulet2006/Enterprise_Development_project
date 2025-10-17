import {useState} from "react"

export interface Notification {
    id: number
    title: string
    description: string
    variant: "default" | "destructive"
}

export const useNotifications = () => {
    const [notifications, setNotifications] = useState<Notification[]>([])

    const addNotification = (
        title: string,
        description: string,
        variant: "default" | "destructive" = "default"
    ) => {
        const id = Date.now()
        setNotifications((prev) => [...prev, {id, title, description, variant}])
        // Авто-удаление через 3 секунды
        setTimeout(() => {
            setNotifications((prev) => prev.filter((n) => n.id !== id))
        }, 3000)
        return id
    }

    const removeNotification = (id: number) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id))
    }

    return {notifications, addNotification, removeNotification}
}