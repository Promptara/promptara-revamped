import { motion } from 'framer-motion';
import { Cpu, Layers, Globe, BarChart3 } from 'lucide-react';
import { FadeIn } from '../utils';
import type { ServiceProps } from '../../types';

const ServiceCard = ({ icon: Icon, title, description, delay }: ServiceProps) => {
    return (
        <FadeIn delay={delay} className="h-full">
            <motion.div
                whileHover={{ y: -10, borderColor: "#14b8a6" }}
                className="h-full p-6 md:p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:rotate-6 transition-all duration-300 relative z-10 shadow-inner">
                    <Icon className="text-slate-700 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors relative z-10">{title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm relative z-10 group-hover:text-slate-600">
                    {description}
                </p>
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all duration-500" />
            </motion.div>
        </FadeIn>
    );
};

const SERVICES_DATA = [
    {
        icon: Cpu,
        title: "AI Prompt Engineering",
        description: "Kami meracik prompt LLM (ChatGPT, Claude, Midjourney) tingkat lanjut untuk otomatisasi bisnis dan konten kreatif.",
    },
    {
        icon: Layers,
        title: "UI/UX Futuristik",
        description: "Desain antarmuka yang clean, modern, dan berorientasi pada user experience masa depan.",
    },
    {
        icon: Globe,
        title: "Web Performance",
        description: "Website Next.js super cepat, SEO-friendly, dan interaktif. Bukan sekadar template biasa.",
    },
    {
        icon: BarChart3,
        title: "Data-Driven Growth",
        description: "Strategi digital marketing yang didukung analisis data AI untuk konversi maksimal.",
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-20 md:py-24 relative bg-slate-50/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 border-b border-slate-200/60 pb-8">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                            Layanan <span className="text-teal-500">Premium</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-slate-500 max-w-md text-left md:text-left font-medium">
                            Solusi end-to-end untuk kebutuhan digital modern.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES_DATA.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
