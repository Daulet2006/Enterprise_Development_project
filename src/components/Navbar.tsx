export default function Navbar({onMenuClick}: { onMenuClick: () => void }) {
    return (
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-4">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Open menu"
                >
                    <svg
                        className="w-6 h-6 text-gray-700 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>

                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Welcome to ZooStore</h2>
            </div>
        </header>
    )
}
