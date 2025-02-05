import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
export default function Doc() {
    return (
        <>
            <section id="documentation" className="bg-neutral-900 py-20 border-b border-neutral-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl font-extrabold text-center text-white mb-16 animate__animated animate__fadeInDown">
                        Documentation
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/*  Sidebar  */}
                        <div className="md:col-span-1">
                            <div className="bg-neutral-800 rounded-xl p-6 sticky top-24">
                                <h3 className="text-white font-bold mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#basics" className="text-gray-400 hover:text-white transition-colors">Basics</a>
                                    </li>
                                    <li>
                                        <a href="#supported-languages" className="text-gray-400 hover:text-white transition-colors">Supported Languages</a>
                                    </li>
                                    <li>
                                        <a href="#complexity-types" className="text-gray-400 hover:text-white transition-colors">Complexity Types</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-3 space-y-8">
                            {/*  Basics Section */}
                            <div id="basics" className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInRight max-w-screen-lg">
                                <h3 className="text-2xl font-bold text-white mb-4">Understanding Time Complexity</h3>
                                <p className="text-gray-400 mb-4">
                                    Time complexity is a measure of the amount of time an algorithm takes to run as a function of the length of the input.
                                </p>
                                <div className="bg-neutral-700 rounded-lg p-4 h-[10em]">
                                    <pre className="text-gray-300 font-mono text-sm">
                                        O(1) - Constant Time
                                        <br />
                                        O(log n) - Logarithmic Time
                                        <br />
                                        O(n) - Linear Time
                                        <br />
                                        O(n log n) - Linearithmic Time
                                        <br />
                                        O(n²) - Quadratic Time
                                        <br />
                                        O(2ⁿ) - Exponential Time</pre>
                                </div>
                            </div>

                            {/* Supported Languages  */}
                            <div id="supported-languages" className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInRight">
                                <h3 className="text-2xl font-bold text-white mb-4">Supported Languages</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="bg-neutral-700 p-4 rounded-lg text-center">
                                        <span className="text-blue-400"><FontAwesomeIcon icon={faPython} className='mr-2' size="lg" />Python</span>
                                    </div>
                                    <div className="bg-neutral-700 p-4 rounded-lg text-center">
                                        <span className="text-yellow-400"><FontAwesomeIcon icon={faJs} className='mr-2' size="lg" />JavaScript</span>
                                    </div>
                                    <div className="bg-neutral-700 p-4 rounded-lg text-center">
                                        <span className="text-red-400"><FontAwesomeIcon icon={faJava} className='mr-2' size="lg" />Java</span>
                                    </div>
                                    <div className="bg-neutral-700 p-4 rounded-lg text-center">
                                        <span className="text-green-400"><FontAwesomeIcon icon={faCode} className='mr-2' size="lg" />C++</span>
                                    </div>
                                    <div className="bg-neutral-700 p-4 rounded-lg text-center">
                                        <span className="text-purple-400"><FontAwesomeIcon icon={faCode} className='mr-2' size="lg" />Ruby</span>
                                    </div>
                                </div>
                            </div>

                            {/*  Complexity Types  */}
                            <div id="complexity-types" className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInRight">
                                <h3 className="text-2xl font-bold text-white mb-4">Types of Complexity Analysis</h3>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <h4 className="text-white font-bold">Best Case</h4>
                                        <p className="text-gray-400">Minimum time required for program execution.</p>
                                    </div>
                                    <div className="border-l-4 border-green-500 pl-4">
                                        <h4 className="text-white font-bold">Average Case</h4>
                                        <p className="text-gray-400">Expected time required for program execution.</p>
                                    </div>
                                    <div className="border-l-4 border-red-500 pl-4">
                                        <h4 className="text-white font-bold">Worst Case</h4>
                                        <p className="text-gray-400">Maximum time required for program execution.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}