import { Cpu } from 'lucide-react';

export const Footer = () => (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
                <div className="text-center md:text-left">
                    <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                        <Cpu className="text-teal-500" />
                        <span className="font-bold text-xl text-slate-900">PROMPTARA.</span>
                    </div>
                    <p className="text-slate-500 max-w-xs">Agency digital masa depan yang menggabungkan kreativitas manusia dengan efisiensi AI.</p>
                </div>
                <div className="flex gap-8">
                    <a href="#" className="text-slate-500 hover:text-teal-500 font-medium">Instagram</a>
                    <a href="#" className="text-slate-500 hover:text-teal-500 font-medium">LinkedIn</a>
                    <a href="#" className="text-slate-500 hover:text-teal-500 font-medium">Dribbble</a>
                </div>
            </div>
            <div className="text-center text-slate-400 text-sm border-t border-slate-100 pt-8">
                &copy; 2026 PROMPTARA Agency. All rights reserved.
            </div>
        </div>
    </footer>
);
