export default function KeyFeatures() {
    return (
        <>
            <section id="features" className="bg-neutral-900 py-20 border-b border-neutral-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl font-extrabold text-center text-white mb-16 animate__animated animate__fadeInDown">
                        Key Features
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-neutral-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Instant Analysis</h3>
                            <p className="text-gray-400">Get immediate time complexity analysis for your code with detailed explanation and breakdown.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-neutral-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17v-8" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17v-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Multi-Language Support</h3>
                            <p className="text-gray-400">Support for multiple programming languages including Python, Java, JavaScript, C++, and more.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-neutral-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Detailed Explanations</h3>
                            <p className="text-gray-400">Get comprehensive explanations of why your code has a particular time complexity.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        {/* Feature 4 */}
                        <div className="bg-neutral-800 rounded-xl p-6 flex items-start space-x-4 animate__animated animate__fadeInLeft">
                            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Code Optimization Tips</h3>
                                <p className="text-gray-400">Receive suggestions for improving your code's efficiency and reducing complexity.</p>
                            </div>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-neutral-800 rounded-xl p-6 flex items-start space-x-4 animate__animated animate__fadeInRight">
                            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Performance Comparison</h3>
                                <p className="text-gray-400">Compare your code's performance against best-case and worst-case scenarios.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}