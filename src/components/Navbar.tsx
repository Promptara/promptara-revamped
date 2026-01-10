import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Cpu } from 'lucide-react';

const NAV_LINKS = ["Home", "Services", "Process", "Shop", "Work", "Team", "Contact"];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            const scrollPosition = window.scrollY + 100;

            for (const link of NAV_LINKS) {
                const sectionId = link.toLowerCase();
                const element = document.getElementById(sectionId);

                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    const offsetBottom = offsetTop + offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(sectionId);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-4 md:py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.a
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl md:text-2xl font-bold tracking-tighter flex items-center gap-2 group cursor-pointer"
                >
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg group-hover:bg-teal-500 transition-colors duration-300">
                        <Cpu className="text-white w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span className="text-slate-800 tracking-tight group-hover:text-teal-600 transition-colors">PROMPTARA<span className="text-teal-500">.</span></span>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-8 items-center">
                    {NAV_LINKS.map((link, i) => {
                        const isActive = activeSection === link.toLowerCase();
                        return (
                            <motion.a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i, duration: 0.5 }}
                                className={`text-sm font-semibold transition-colors relative group ${isActive ? 'text-teal-600' : 'text-slate-500 hover:text-teal-600'}`}
                            >
                                {link}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-teal-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </motion.a>
                        );
                    })}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/30 transition-all flex items-center gap-2"
                    >
                        Client Area
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden fixed inset-0 top-[60px] md:top-[70px] bg-white z-40 overflow-y-auto"
                    >
                        <div className="flex flex-col p-8 gap-6 pb-20">
                            {NAV_LINKS.map((link, idx) => (
                                <motion.a
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                    className={`font-bold text-2xl flex items-center justify-between border-b border-slate-100 pb-4 ${activeSection === link.toLowerCase() ? 'text-teal-500' : 'text-slate-800 hover:text-teal-500'}`}
                                >
                                    {link}
                                    <ArrowRight size={20} className="text-slate-300" />
                                </motion.a>
                            ))}
                            <div className="mt-4">
                                <button className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-teal-500 transition-colors">Client Area</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
