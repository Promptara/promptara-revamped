import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
    onLoadingComplete: () => void;
}

export const Preloader = ({ onLoadingComplete }: PreloaderProps) => {
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState("");
    const finalText = "PROMPTARA";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setText(
                finalText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return letter;
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= finalText.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 50);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const countInterval = setInterval(() => {
            setCounter((prev) => {
                if (prev >= 100) {
                    clearInterval(countInterval);
                    return 100;
                }
                return prev + 1;
            });
        }, 25);

        const timeout = setTimeout(() => {
            onLoadingComplete();
        }, 3500);

        return () => {
            clearInterval(countInterval);
            clearTimeout(timeout);
        };
    }, [onLoadingComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[100] bg-white flex flex-col justify-between p-6 md:p-20 overflow-hidden"
        >
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">System Initializing</span>
                </div>
                <div className="hidden md:block text-xs font-mono text-slate-300">
                    ID: 884-XJ-92
                </div>
            </div>

            <div className="flex flex-col items-center justify-center relative w-full">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-4xl sm:text-5xl md:text-8xl font-black text-slate-900 tracking-tighter text-center break-words w-full"
                >
                    {text}
                </motion.h1>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "200px" }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                    className="h-1 bg-teal-500 mt-4 rounded-full"
                />
            </div>

            <div className="flex justify-between items-end w-full">
                <div className="text-slate-400 text-xs max-w-[200px] hidden md:block">
                    Loading assets, textures, and AI models for optimal experience.
                </div>
                <div className="text-6xl sm:text-7xl md:text-9xl font-black text-slate-100 leading-none relative ml-auto md:ml-0">
                    {counter}%
                    <span className="absolute -left-4 top-0 text-[10px] md:text-sm text-teal-500 font-bold tracking-widest -rotate-90 origin-bottom-right">LOADING</span>
                </div>
            </div>
        </motion.div>
    );
};
