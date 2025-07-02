'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: '¿Cuál es el mejor canal para contactarlos?',
    answer: 'Para soporte urgente, usa el chat en vivo. Para consultas detalladas, el email es ideal. Para consultas de ventas, prefiere el teléfono.'
  },
  {
    id: 'faq-2',
    question: '¿Ofrecen soporte en español?',
    answer: 'Sí, todo nuestro equipo de soporte habla español nativamente y está basado en México.'
  },
  {
    id: 'faq-3',
    question: '¿Puedo agendar una demostración?',
    answer: '¡Por supuesto! Contáctanos por teléfono o email mencionando que quieres una demo y coordinaremos una sesión personalizada.'
  },
  {
    id: 'faq-4',
    question: '¿Cuánto tiempo toma implementar StartX369?',
    answer: 'La implementación básica toma entre 1-3 días. Para configuraciones avanzadas con integraciones personalizadas, puede tomar 1-2 semanas.'
  },
  {
    id: 'faq-5',
    question: '¿Ofrecen migración de datos desde otros sistemas?',
    answer: 'Sí, ofrecemos servicios de migración desde la mayoría de sistemas ERP y e-commerce populares. Nuestro equipo técnico te ayudará en todo el proceso.'
  }
];

export function ContactFAQ() {
  const [openFAQ, setOpenFAQ] = useState<string>('faq-1');

  const handleFAQToggle = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? '' : faqId);
  };

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <div className="max-w-4xl mx-auto">
          <div className="join join-vertical w-full">
            {faqData.map((faq) => (
              <div key={faq.id} className="collapse collapse-arrow join-item border border-base-300">
                <input 
                  type="radio" 
                  name="contact-faq" 
                  checked={openFAQ === faq.id}
                  onChange={() => handleFAQToggle(faq.id)}
                  readOnly
                />
                <div className="collapse-title text-xl font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 