import { Metadata } from 'next';
import { Navbar } from "@/shared/components/custom/Navbar";
import { Footer } from "@/shared/components/footer/Footer";
import { ContactHero, ContactSection, ContactFAQ, ChatWidget } from './__comp';

export const metadata: Metadata = {
  title: 'Contacto - StartX369',
  description: 'Ponte en contacto con el equipo de StartX369. Estamos aquí para ayudarte con cualquier consulta sobre nuestro sistema ERP y e-commerce.',
  keywords: ['contacto', 'soporte', 'StartX369', 'ERP', 'e-commerce', 'ayuda'],
  openGraph: {
    title: 'Contacto - StartX369',
    description: 'Ponte en contacto con el equipo de StartX369. Estamos aquí para ayudarte.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto - StartX369',
    description: 'Ponte en contacto con el equipo de StartX369. Estamos aquí para ayudarte.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactSection />
      <ContactFAQ />
      <Footer />
      <ChatWidget />
    </div>
  );
} 