import type React from "react"

import {useState} from "react"
import Sidebar from "./Sidebar.tsx"
import Navbar from "./Navbar.tsx"
import { useNotifications } from "../hooks/useNotifications"
import NotificationsContainer from "./NotificationsContainer.tsx"
interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const { notifications, removeNotification } = useNotifications()  // Глобальный хук
    return (
        <div className="flex h-screen overflow-hidden bg-cream dark:bg-gray-900">
            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}/>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar onMenuClick={() => setSidebarOpen(true)}/>

                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">{children}</main>
            </div>
            <NotificationsContainer
                notifications={notifications}
                onRemove={removeNotification}
            />
        </div>
    )
}
