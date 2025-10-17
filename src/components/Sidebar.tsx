import {Link, NavLink} from "react-router-dom"
import {useTheme} from "@/contexts/useTheme.tsx";

interface SidebarProps {
    isOpen: boolean
    onClose: () => void
}

const navItems = [
    {path: "/", label: "Home", icon: "🏠"},
    {path: "/pets", label: "Pets", icon: "🐾"},
    {path: "/products", label: "Products", icon: "🛍️"},
    {path: "/about", label: "About Us", icon: "🧑‍💼"},
    {path: "/contacts", label: "Contacts", icon: "📞"},
    {path: "/cart", label: "Cart", icon: "🛒"},
]

export default function Sidebar({isOpen, onClose}: SidebarProps) {
    const {theme, toggleTheme} = useTheme()

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose}/>}

            {/* Sidebar */}
            <aside
                className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-white dark:bg-gray-800
          border-r border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h1 className="text-2xl font-bold text-teal-600 dark:text-emerald-400">
                            <Link to="/">ZooStore</Link>
                        </h1>                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Your
                        Pet Paradise</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-hide">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={onClose}
                                className={({isActive}) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                        isActive
                                            ? "bg-teal-100 dark:bg-emerald-900/30 text-teal-700 dark:text-emerald-400"
                                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`
                                }
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span className="font-medium">{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>

                    {/* Theme Toggle */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <button
                            onClick={toggleTheme}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                            <span className="font-medium text-gray-700 dark:text-gray-300">Theme</span>
                            <span className="text-2xl">{theme === "light" ? "🌙" : "☀️"}</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}
