import { Sparkles } from 'lucide-react';
import { FadeIn } from '../utils';

const TESTIMONIALS_DATA = [
    {
        quote: "Promptara mengubah cara kami bekerja. UI Kit mereka sangat detail dan Prompts AI yang mereka sediakan menghemat waktu tim kami hingga 70%.",
        name: "Mas Prabs",
        role: "CEO",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
        quote: "Website agency kami jadi sangat cepat dan elegan berkat sentuhan Promptara. Desain futuristiknya benar-benar merepresentasikan brand kami.",
        name: "Mas Owi",
        role: "Founder, CreativeHub",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    }
];

export const Testimonials = () => (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-teal-500/30 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-black text-center mb-16">Trusted by Innovators</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TESTIMONIALS_DATA.map((testimonial, index) => (
                    <FadeIn key={index} delay={(index + 1) * 0.1}>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} size={16} className="text-teal-400 fill-teal-400" />)}
                            </div>
                            <p className="text-slate-300 mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-700 rounded-full overflow-hidden">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-teal-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    </section>
);
