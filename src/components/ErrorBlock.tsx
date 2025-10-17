interface ErrorBlockProps {
    message: string
    onRetry?: () => void
}

export default function ErrorBlock({message, onRetry}: ErrorBlockProps) {
    return (
        <div
            className="flex flex-col items-center justify-center p-12 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-400 mb-2">Something went wrong</h3>
            <p className="text-red-600 dark:text-red-300 mb-4 text-center">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                    Try Again
                </button>
            )}
        </div>
    )
}
