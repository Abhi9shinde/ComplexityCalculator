export default function HowWorks() {
    return (
        <>
            <section id="howItWorks" class="bg-neutral-900 py-20 border-b border-neutral-800">
                <div class="container mx-auto px-6">
                    <h2 class="text-5xl font-extrabold text-center text-white mb-16 animate__animated animate__fadeInDown">
                        How It Works
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {/* Step 1 */}
                        <div class="relative animate__animated animate__fadeInUp">
                            <div class="absolute -left-4 -top-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                1
                            </div>
                            <div class="bg-neutral-800 rounded-xl p-6 pt-10">
                                <h3 class="text-xl font-bold text-white mb-4">Paste Your Code</h3>
                                <p class="text-gray-400">Simply paste your code into the text editor. Our calculator supports multiple programming languages.</p>
                                <div class="mt-6 bg-white p-4 rounded-lg border border-gray-200">
                                    <pre class="text-sm text-gray-600">
                                        <code>function example() {
                                            // Your code here
                                        }</code>
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Step 2  */}
                        <div class="relative animate__animated animate__fadeInUp animate__delay-1s">
                            <div class="absolute -left-4 -top-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                2
                            </div>
                            <div class="bg-neutral-800 rounded-xl p-6 pt-10">
                                <h3 class="text-xl font-bold text-white mb-4">Click Analyze</h3>
                                <p class="text-gray-400">Hit the analyze button and our algorithm will process your code using advanced pattern recognition.</p>
                                <div class="mt-6 flex justify-center">
                                    <button class="bg-blue-500 text-white px-6 py-2 rounded-lg transform hover:scale-105 transition-transform">
                                        Analyze Code
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Step 3  */}
                        <div class="relative animate__animated animate__fadeInUp animate__delay-2s">
                            <div class="absolute -left-4 -top-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                3
                            </div>
                            <div class="bg-neutral-800 rounded-xl p-6 pt-10">
                                <h3 class="text-xl font-bold text-white mb-4">Get Results</h3>
                                <p class="text-gray-400">Receive detailed analysis including time complexity, explanation, and optimization suggestions.</p>
                                <div class="mt-6 bg-white p-4 rounded-lg border border-gray-200">
                                    <div class="flex items-center space-x-2 mb-2">
                                        <span class="text-blue-500 font-bold">Time Complexity:</span>
                                        <span class="font-mono">O(n²)</span>
                                    </div>
                                    <div class="text-sm text-gray-600">
                                        Nested loop structure detected...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connection Lines (Desktop Only) */}
                    <div class="hidden md:block">
                        <div class="absolute left-1/3 top-1/2 w-1/6 h-0.5 bg-blue-200"></div>
                        <div class="absolute left-2/3 top-1/2 w-1/6 h-0.5 bg-blue-200"></div>
                    </div>

                    {/* Additional Info  */}
                    <div class="mt-16 text-center max-w-2xl mx-auto">
                        <p class="text-gray-400">
                            Our algorithm analyzes your code structure, loops, and patterns to determine the most accurate time complexity calculation.
                        </p>
                        <a href="#documentation" class="inline-block mt-6 text-blue-500 hover:text-blue-600 font-medium">
                            Learn more about our analysis method →
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}