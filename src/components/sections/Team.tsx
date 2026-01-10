import { Globe, Mail } from 'lucide-react';
import { FadeIn } from '../utils';
import type { TeamMember } from '../../types';
import Jokodil from '../../assets/jokodil.jpg';
import Grabran from '../../assets/Grabran.jpg';
import Prabowski from '../../assets/Prabs.jpg';

const FounderCard = ({ name, role, image, delay }: TeamMember) => (
    <FadeIn delay={delay}>
        <div className="group relative">
            <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-5 shadow-lg">
                <div className="absolute inset-0 bg-teal-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src={image} alt={name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                    <div className="flex gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-teal-500 cursor-pointer transition-colors"><Globe size={16} /></div>
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-teal-500 cursor-pointer transition-colors"><Mail size={16} /></div>
                    </div>
                </div>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900">{name}</h3>
            <p className="text-teal-600 font-bold uppercase text-xs tracking-wider mt-1">{role}</p>
        </div>
    </FadeIn>
);

const FOUNDERS_DATA = [
    { name: "Prabowski", role: "CEO & Prompt Engineer", image: Prabowski },
    { name: "Jokodi", role: "Head of Design", image: Jokodil },
    { name: "Grabran", role: "CTO & AI Researcher", image: Grabran }
];

export const Team = () => {
    return (
        <section id="team" className="py-20 md:py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute right-0 top-20 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-[80px] -z-10"></div>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                            The <span className="text-teal-500">Minds.</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-slate-500 max-w-md text-left md:text-left font-medium">
                            Para visioner dibalik PROMPTARA yang mendedikasikan diri untuk inovasi digital.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FOUNDERS_DATA.map((member, i) => (
                        <FounderCard key={i} {...member} delay={i * 0.2} />
                    ))}
                </div>
            </div>
        </section>
    );
};
