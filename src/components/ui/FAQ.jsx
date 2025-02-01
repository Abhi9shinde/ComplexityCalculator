import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqItems = [
        {
            question: 'What is time complexity analysis?',
            answer:
                'Time complexity analysis is a method to determine how the runtime of an algorithm grows with the size of its input. It helps developers understand the scalability and efficiency of their code.',
        },
        {
            question: 'Which programming languages are supported?',
            answer:
                'Our calculator currently supports Python, JavaScript, Java, C++, and Ruby. We\'re continuously adding support for more programming languages.',
        },
        {
            question: 'How accurate is the complexity analysis?',
            answer:
                'Our algorithm provides highly accurate analysis based on established patterns and best practices in algorithm analysis. However, for very complex or unusual code structures, we recommend manual verification.',
        },
        {
            question: 'Can it analyze space complexity too?',
            answer:
                'Yes, our calculator can analyze both time and space complexity. The analysis includes detailed explanations of memory usage patterns in your code.',
        },
    ];

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-neutral-900 py-20 border-b border-neutral-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-16 animate__animated animate__fadeInDown">
                    Frequently Asked Questions
                </h2>

                <div className="max-w-3xl mx-auto space-y-6">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-neutral-800 rounded-xl overflow-hidden animate__animated animate__fadeInUp animate__delay-${index}s`}
                        >
                            <button
                                onClick={() => toggleAnswer(index)}
                                className="faq-button w-full px-6 py-4 text-left flex justify-between items-center"
                            >
                                <span className="text-lg font-semibold text-white">{item.question}</span>
                                <svg
                                    className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="faq-answer px-6 py-4 bg-neutral-700">
                                    <p className="text-gray-300">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
