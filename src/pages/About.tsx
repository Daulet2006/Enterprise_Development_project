export default function About() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">About ZooStore</h1>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Our Story</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    ZooStore was founded with a simple mission: to connect loving families with their perfect pet
                    companions while
                    providing everything needed for a happy, healthy pet life.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    With over 10 years of experience in pet care and retail, we've built a reputation for quality, care,
                    and
                    exceptional customer service. Every pet in our store receives the best care, and we ensure they're
                    healthy and
                    ready for their forever homes.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <div className="text-3xl mb-3">🎯</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        To provide healthy, happy pets and quality products while educating pet owners on proper care
                        and nutrition.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <div className="text-3xl mb-3">💎</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Our Values</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Compassion, quality, integrity, and a genuine love for animals guide everything we do.
                    </p>
                </div>
            </div>

            <div
                className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 md:p-8 border border-teal-200 dark:border-teal-800">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Why Choose Us?</h2>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <span className="text-teal-600 dark:text-emerald-400 mt-1">✓</span>
                        <span
                            className="text-gray-700 dark:text-gray-300">All pets are health-checked and vaccinated</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-teal-600 dark:text-emerald-400 mt-1">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">Expert staff with years of pet care experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-teal-600 dark:text-emerald-400 mt-1">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">Premium products from trusted brands</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-teal-600 dark:text-emerald-400 mt-1">✓</span>
                        <span
                            className="text-gray-700 dark:text-gray-300">Ongoing support and advice for pet owners</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
