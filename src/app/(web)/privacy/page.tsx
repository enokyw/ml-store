import { Metadata } from 'next';
import { Navbar } from "@/shared/components/custom/Navbar";
import { Footer } from "@/shared/components/footer/Footer";

export const metadata: Metadata = {
  title: 'Política de Privacidad - StartX369',
  description: 'Política de privacidad y protección de datos de StartX369.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Política de Privacidad</h1>
          <p className="text-center text-base-content/70 mb-12">
            Última actualización: 1 de enero de 2024
          </p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Información que Recopilamos</h2>
              <p>Recopilamos información que usted nos proporciona directamente, como cuando crea una cuenta, realiza una compra, o se pone en contacto con nosotros.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Cómo Usamos su Información</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                <li>Procesar transacciones y enviar confirmaciones</li>
                <li>Enviar comunicaciones técnicas y actualizaciones</li>
                <li>Responder a sus comentarios y preguntas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Protección de Datos</h2>
              <p>Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra el acceso no autorizado, alteración, divulgación o destrucción.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Sus Derechos</h2>
              <p>Usted tiene derecho a acceder, actualizar, corregir o eliminar su información personal. También puede optar por no recibir comunicaciones de marketing.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Contacto</h2>
              <p>
                Para preguntas sobre esta política de privacidad: 
                <br />Email: privacy@startx369.com
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 