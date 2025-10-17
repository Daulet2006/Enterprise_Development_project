import {CheckCircle, XCircle} from "lucide-react"
import type {Notification} from "../hooks/useNotifications.ts"

interface NotificationsContainerProps {
    notifications: Notification[]
    onRemove: (id: number) => void
}

export default function NotificationsContainer({notifications, onRemove}: NotificationsContainerProps) {
    if (notifications.length === 0) return null

    return (
        <div className="fixed bottom-4 right-4 space-y-2 z-50">
            {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className={`
                        max-w-md w-full p-4 rounded-lg shadow-lg border 
                        transition-all duration-200 animate-in slide-in-from-bottom-2
                        ${notification.variant === "destructive"
                        ? "bg-destructive text-destructive-foreground border-destructive"
                        : "bg-background text-foreground border-border"
                    }
                        dark:${notification.variant === "destructive"
                        ? "bg-destructive dark:border-destructive"
                        : "bg-card dark:border-border"
                    }
                    `}
                >
                    <div className="flex items-start gap-3">
                        {notification.variant === "default" ? (
                            <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0"/>
                        ) : (
                            <XCircle className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0"/>
                        )}
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm">{notification.title}</h3>
                            <p className="text-sm opacity-90 mt-1">{notification.description}</p>
                        </div>
                        <button
                            onClick={() => onRemove(notification.id)}
                            className="ml-2 p-1 text-foreground/50 hover:text-foreground opacity-70 hover:opacity-100 transition-opacity"
                        >
                            ×
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}