import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export function ContactSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Client Component */}
          <ContactForm />
          
          {/* Contact Information - Server Component */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
} 