import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../../types';

const AccordionItem = ({ question, answer }: FaqItem) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-teal-600 transition-colors"
            >
                <span className="text-base md:text-lg font-bold text-slate-800 pr-8">{question}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-slate-500 leading-relaxed text-sm md:text-base">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQS_DATA: FaqItem[] = [
    { question: "Apa itu AI Prompt Engineering?", answer: "Ini adalah teknik merancang instruksi (prompts) yang tepat untuk model AI seperti ChatGPT atau Midjourney agar menghasilkan output yang spesifik, berkualitas, dan sesuai kebutuhan bisnis Anda." },
    { question: "Berapa lama proses pembuatan website?", answer: "Untuk Company Profile standar sekitar 2-3 minggu. Untuk Web App custom bisa memakan waktu 1-3 bulan tergantung kompleksitas fitur." },
    { question: "Apakah saya mendapatkan source code?", answer: "Ya, untuk paket Full Development, Anda akan mendapatkan akses penuh ke repository source code dan aset desain." },
];

export const FAQ = () => {
    return (
        <section className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-500">Pertanyaan umum tentang layanan kami.</p>
                </div>
                {FAQS_DATA.map((faq, i) => <AccordionItem key={i} {...faq} />)}
            </div>
        </section>
    );
};
