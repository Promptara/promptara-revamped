import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '../../types';

const ShopItem = ({ product }: { product: Product }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
        >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-slate-900 uppercase tracking-wide shadow-sm border border-slate-100">
                    {product.category}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-teal-600 transition-colors leading-tight line-clamp-2">{product.title}</h3>
                    <span className="font-black text-teal-600 text-lg whitespace-nowrap">{product.price}</span>
                </div>
                <div className="mt-auto pt-4">
                    <button className="w-full py-3 rounded-xl bg-slate-50 text-slate-900 font-bold text-sm border border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all flex items-center justify-center gap-2">
                        <ShoppingBag size={16} /> Add to Cart
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const PRODUCTS_DATA: Product[] = [
    { id: 1, title: "SaaS Dashboard UI Kit", category: "UI Kits", price: "$49", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Midjourney Photorealistic Prompts", category: "AI Prompts", price: "$19", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Agency Notion System", category: "Templates", price: "$29", image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "E-Commerce Mobile App UI", category: "UI Kits", price: "$59", image: "https://images.unsplash.com/photo-1607799275518-d58665d099db?auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "SEO Blog Writer Prompts Pack", category: "AI Prompts", price: "$25", image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "Next.js Portfolio Template", category: "Templates", price: "$39", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
];

const CATEGORIES = ['All', 'AI Prompts', 'UI Kits', 'Templates'] as const;
type CategoryFilter = typeof CATEGORIES[number];

export const Shop = () => {
    const [filter, setFilter] = useState<CategoryFilter>('All');

    const filteredProducts = filter === 'All'
        ? PRODUCTS_DATA
        : PRODUCTS_DATA.filter(p => p.category === filter);

    return (
        <section id="shop" className="py-20 md:py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
                    <div className="text-left">
                        <span className="text-teal-500 font-bold tracking-wider text-xs uppercase mb-2 block">PROMPTARA STORE</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">Digital Assets</h2>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-xl md:rounded-full border border-slate-200 shadow-sm w-full lg:w-auto">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-lg md:rounded-full text-xs font-bold transition-all duration-300 flex-grow md:flex-grow-0 ${filter === cat
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'bg-transparent text-slate-500 hover:text-slate-900'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <ShopItem key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};
