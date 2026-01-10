import { FadeIn } from '../utils';

const PROJECTS_DATA = [
    { title: "Neo Finance AI", category: "Fintech App", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Luxe Estate VR", category: "Web Design", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Kopi Kenangan App", category: "Rebranding", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "MediTech AI Diagnosis", category: "Mobile Platform", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

export const Portfolio = () => {
    return (
        <section id="work" className="py-20 md:py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Latest Work</h2>
                        <p className="text-slate-500">
                            Integrasi desain futuristik dengan fungsionalitas cerdas.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS_DATA.map((project, idx) => (
                        <FadeIn key={idx} delay={idx * 0.2}>
                            <div className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-video shadow-lg">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                                    <div className="text-center translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-teal-400 font-bold uppercase text-xs tracking-wider mb-2">{project.category}</p>
                                        <h3 className="text-white text-3xl font-bold mb-6">{project.title}</h3>
                                        <button className="px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition-colors font-bold text-sm">Lihat Proyek</button>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
