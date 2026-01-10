import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { FadeIn } from '../utils';

export const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">

                    {/* Left Column: Hook & Info */}
                    <FadeIn>
                        <span className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-4 block">GET IN TOUCH</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">
                            Let's start a <br />
                            <span className="text-teal-500">Conversation.</span>
                        </h2>
                        <p className="text-slate-500 text-base md:text-lg mb-8 md:mb-12 max-w-md leading-relaxed">
                            Punya ide besar atau ingin mentransformasi bisnis Anda dengan AI? Kami di sini untuk mendengarkan dan mengeksekusi.
                        </p>

                        <div className="space-y-6 md:space-y-8">
                            <div className="group flex items-start gap-6 cursor-pointer">
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                                    <p className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">hello@promptara.id</p>
                                </div>
                            </div>

                            <div className="group flex items-start gap-6 cursor-pointer">
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Visit Studio</p>
                                    <p className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">Jakarta Selatan, ID</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Column: Clean Form */}
                    <FadeIn delay={0.2} className="bg-white p-6 md:p-10 rounded-3xl md:rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8">Send a Message</h3>
                        <form className="space-y-4 md:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:bg-white transition-all text-sm md:text-base"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:bg-white transition-all text-sm md:text-base"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Interest</label>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:bg-white transition-all text-sm md:text-base">
                                    <option>Web Development</option>
                                    <option>AI Prompt Engineering</option>
                                    <option>UI/UX Design</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:bg-white transition-all resize-none text-sm md:text-base"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-slate-900 text-white font-bold py-3 md:py-4 rounded-xl hover:bg-teal-500 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-teal-500/25"
                            >
                                Send Message <Send size={18} />
                            </motion.button>
                        </form>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};
