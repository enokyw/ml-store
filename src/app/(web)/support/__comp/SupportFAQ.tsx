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
    question: '¿Cómo empiezo a usar StartX369?',
    answer: 'Es muy simple: 1) Regístrate con tu email, 2) Configura tu información básica, 3) Agrega tus productos, 4) ¡Comienza a vender! Todo el proceso toma menos de 15 minutos.'
  },
  {
    id: 'faq-2',
    question: '¿Puedo cancelar mi suscripción en cualquier momento?',
    answer: 'Sí, puedes cancelar tu suscripción en cualquier momento desde tu panel de control. No hay permanencias ni penalizaciones. Tendrás acceso hasta el final de tu periodo de facturación.'
  },
  {
    id: 'faq-3',
    question: '¿StartX369 cumple con las regulaciones fiscales mexicanas?',
    answer: 'Absolutamente. StartX369 está completamente adaptado a las regulaciones del SAT. Generamos facturas electrónicas válidas, manejamos CFDI 4.0 y cumplimos con todos los requerimientos fiscales vigentes.'
  },
  {
    id: 'faq-4',
    question: '¿Qué integraciones están disponibles?',
    answer: 'Tenemos integraciones nativas con WhatsApp Business, TikTok Shop, Facebook, Instagram, MercadoLibre, Amazon, y muchas más. También ofrecemos API para integraciones personalizadas.'
  },
  {
    id: 'faq-5',
    question: '¿Hay límites en el número de productos?',
    answer: 'Depende de tu plan. El plan Emprendedor incluye hasta 100 productos, el Profesional productos ilimitados, y el Empresarial también ilimitados con funciones avanzadas.'
  },
  {
    id: 'faq-6',
    question: '¿Ofrecen migración desde otras plataformas?',
    answer: 'Sí, ofrecemos servicio de migración gratuito desde plataformas como Shopify, WooCommerce, Magento y otras. Nuestro equipo se encarga de transferir todos tus datos de forma segura.'
  }
];

export function SupportFAQ() {
  const [openFAQ, setOpenFAQ] = useState<string>('faq-1');

  const handleFAQToggle = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? '' : faqId);
  };

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="join join-vertical w-full">
            {faqData.map((faq) => (
              <div key={faq.id} className="collapse collapse-arrow join-item border border-base-300">
                <input 
                  type="radio" 
                  name="support-faq" 
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