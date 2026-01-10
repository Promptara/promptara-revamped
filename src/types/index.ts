// --- Shared Types & Interfaces ---

export interface ServiceProps {
    icon: React.ElementType;
    title: string;
    description: string;
    delay: number;
}

export interface Product {
    id: number;
    title: string;
    category: 'AI Prompts' | 'UI Kits' | 'Templates';
    price: string;
    image: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    delay: number;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface ProcessStepProps {
    number: string;
    title: string;
    desc: string;
    delay: number;
}
