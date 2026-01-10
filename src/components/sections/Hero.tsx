import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import { FadeIn, GridPattern } from '../utils';

export const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <GridPattern />
            <motion.div style={{ y: y1 }} className="absolute top-[10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-teal-300/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply" />
            <motion.div style={{ y: y2 }} className="absolute bottom-[10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-300/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply" />

            <div className="container mx-auto px-6 z-10 relative">
                <div className="max-w-5xl mx-auto text-center">
                    <FadeIn delay={0.2}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-2 py-2 px-4 md:px-5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 md:mb-8 cursor-default hover:border-teal-400 transition-colors"
                        >
                            <Sparkles size={14} className="text-teal-500" />
                            Next Gen Creative AI Agency
                        </motion.div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 tracking-tight">
                            We Don't Just Design.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 animate-gradient-x">
                                We Engineer Future.
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <p className="text-base md:text-xl text-slate-500 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                            Menggabungkan kecerdasan buatan (AI) dengan estetika manusia untuk menciptakan pengalaman digital yang imersif, cepat, dan presisi.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(20 184 166 / 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-teal-500 transition-all"
                            >
                                Mulai Proyek <ArrowRight size={20} />
                            </motion.a>
                            <motion.a
                                href="#shop"
                                whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-200 bg-white text-slate-700 font-bold text-lg hover:border-teal-500 hover:text-teal-600 transition-all flex items-center justify-center gap-2 shadow-sm"
                            >
                                <ShoppingBag size={20} /> Lihat Toko
                            </motion.a>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-teal-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};
