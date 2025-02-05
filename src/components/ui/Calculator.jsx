import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'; // Import the icon you want
import { useState } from 'react';

export default function Calculator() {
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const api_url = import.meta.env.VITE_API_URL;
        try {
            const res = await fetch("api_url", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code }),
            });

            const data = await res.json(); // ✅ Fixed missing `await`
            if (!res.ok) {
                throw new Error(data.error || `Request failed with status ${res.status}`);
            }

            setResult(data.result);
        } catch (error) {
            console.error(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    const updateCode = (evt) => {
        setCode(evt.target.value);
    };

    const clearInp = () => {
        setCode("");
    };

    return (
        <section id="calculator" className="bg-neutral-900 py-20 border-b border-neutral-800">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-extrabold text-center text-white mb-12 animate__animated animate__fadeInDown">
                    Time Complexity Calculator
                </h2>
                <div className="max-w-4xl mx-auto bg-neutral-100 rounded-xl shadow-lg p-8">
                    <div className="mb-6">
                        <div className="flex justify-end mb-4">
                            <button id="clear-btn" className="text-gray-600 hover:text-red-500 transition-colors" onClick={clearInp}>
                                <span className="mr-2">Clear</span>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <textarea
                                id="code-input"
                                className="w-full h-64 p-4 font-mono text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Paste your code here..."
                                value={code}
                                onChange={updateCode}
                            ></textarea>

                            <div className="flex justify-center my-8">
                                <button type="submit" disabled={loading} id="analyze-btn"
                                    className="flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition-colors animate__animated animate__pulse animate__infinite">
                                    {loading ? "Analyzing..." : "Analyze Time Complexity"}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mx-1 my-0.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/*Display result only if available */}
                    {result && (
                        <div id="result-section" className="animate__animated animate__fadeIn">
                            <div className="bg-white rounded-lg p-6 border border-gray-200">
                                <h3 className="text-xl font-bold text-neutral-800 mb-4">Analysis Result</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="mr-4">
                                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">Time Complexity</span>
                                        </div>
                                        <p id="time-complexity-result" className="font-mono">{result}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
