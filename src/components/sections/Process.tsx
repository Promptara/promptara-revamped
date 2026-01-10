import { FadeIn } from '../utils';
import type { ProcessStepProps } from '../../types';

const ProcessStep = ({ number, title, desc, delay }: ProcessStepProps) => (
    <FadeIn delay={delay} className="relative pl-8 md:pl-0">
        <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-slate-200"></div>
        <div className="md:hidden absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-teal-500"></div>

        <div className="mb-2 md:mb-4">
            <span className="text-5xl md:text-6xl font-black text-slate-100 absolute -top-6 -left-4 -z-10 md:static md:text-slate-100 md:mb-4 md:block">{number}</span>
            <h3 className="text-lg md:text-xl font-bold text-slate-900">{title}</h3>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </FadeIn>
);

const PROCESS_STEPS = [
    {
        number: "01",
        title: "Discovery & AI Strategy",
        desc: "Kami menganalisis masalah Anda dan merancang strategi berbasis data dan AI untuk solusi paling efisien.",
    },
    {
        number: "02",
        title: "Futuristic Design",
        desc: "Tim desain kami membuat prototipe interaktif dengan estetika modern yang memanjakan mata pengguna.",
    },
    {
        number: "03",
        title: "Development & Scale",
        desc: "Eksekusi kode yang bersih, testing ketat, dan peluncuran produk yang siap untuk di-scale.",
    }
];

export const Process = () => {
    return (
        <section id="process" className="py-20 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-white to-white opacity-50"></div>
            <div className="container mx-auto px-6 relative">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <FadeIn>
                        <span className="text-teal-500 font-bold tracking-widest text-xs uppercase mb-2 block">WORKFLOW</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">Bagaimana Kami Bekerja</h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {PROCESS_STEPS.map((step, index) => (
                        <ProcessStep
                            key={step.number}
                            {...step}
                            delay={(index + 1) * 0.1 + 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
