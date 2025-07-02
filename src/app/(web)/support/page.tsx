import { Metadata } from 'next';
import { Navbar } from "@/shared/components/custom/Navbar";
import { Footer } from "@/shared/components/footer/Footer";
import { 
  SupportHero, 
  QuickHelpOptions, 
  ContactOptions, 
  SupportFAQ, 
  KnowledgeBase, 
  SystemStatus 
} from './__comp';

export const metadata: Metadata = {
  title: 'Centro de Ayuda - StartX369',
  description: 'Obtén ayuda rápida con nuestro centro de soporte. FAQs, tutoriales y contacto directo con nuestro equipo de StartX369.',
  keywords: ['soporte', 'ayuda', 'FAQ', 'contacto', 'asistencia técnica', 'StartX369', 'ERP', 'e-commerce'],
  openGraph: {
    title: 'Centro de Ayuda - StartX369',
    description: 'Obtén ayuda rápida con nuestro centro de soporte. FAQs, tutoriales y contacto directo.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centro de Ayuda - StartX369',
    description: 'Obtén ayuda rápida con nuestro centro de soporte. FAQs, tutoriales y contacto directo.',
  },
};

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SupportHero />
      <QuickHelpOptions />
      <ContactOptions />
      <SupportFAQ />
      <KnowledgeBase />
      <SystemStatus />
      <Footer />
    </div>
  );
}