import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string | ReactNode;
}

export function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="glass-card rounded-2xl overflow-hidden mb-3">
            <button
                className="flex justify-between items-center w-full p-6 text-left group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-base md:text-lg font-medium text-white group-hover:text-[#F42C52] transition-colors pr-4">
                    {question}
                </span>
                <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F42C52]/10 transition-all ${isOpen ? 'bg-[#F42C52]/10' : ''}`}>
                    <ChevronDown
                        className={`w-5 h-5 text-white/50 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#F42C52]' : ''}`}
                    />
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
            >
                <div className="px-6 pb-6 text-white/60 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
}
