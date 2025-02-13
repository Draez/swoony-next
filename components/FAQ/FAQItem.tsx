import { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-5 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold text-main-blue">{question}</span>
                <svg
                    className={`w-6 h-6 text-main-blue transform transition-transform ${isOpen ? 'rotate-180' : ''
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mb-4' : 'max-h-0'
                    }`}
            >
                <p className="text-light-blue">{answer}</p>
            </div>
        </div>
    );
} 