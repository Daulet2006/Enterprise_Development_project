export default function Contacts() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Contacts
            </h1>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <div className="text-3xl mb-3">📍</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        Our address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Al-Farabi street, 124
                        <br/>
                        Almaty city, Kazakhstan
                        <br/>
                        050000
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <div className="text-3xl mb-3">📞</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        Call us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Phone: +7 (727) 123-45-67
                        <br/>
                        WhatsApp: +7 (777) 654-32-10
                        <br/>
                        Mon-Sat: 9:00 – 19:00
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <div className="text-3xl mb-3">✉️</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        Write to us </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        info@zoostore.kz
                        <br/>
                        support@zoostore.kz
                        <br/>
                        We respond during the business day </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <div className="text-3xl mb-3">💬</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        We are on social media
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Follow us:
                        <br/>
                        Instagram • Telegram • TikTok
                        <br/>
                        @zoostore_kz
                    </p>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                    Send a message
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-teal-500 dark:focus:ring-emerald-500 focus:border-transparent outline-none"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-teal-500 dark:focus:ring-emerald-500 focus:border-transparent outline-none"
                            placeholder="example@zoostore.kz"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Message
                        </label>
                        <textarea
                            rows={5}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-teal-500 dark:focus:ring-emerald-500 focus:border-transparent outline-none resize-none"
                            placeholder="How can we assist you?"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-teal-500 hover:bg-teal-600 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}
