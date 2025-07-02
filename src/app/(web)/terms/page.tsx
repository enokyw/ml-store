import { Metadata } from 'next';
import { Navbar } from "@/shared/components/custom/Navbar";
import { Footer } from "@/shared/components/footer/Footer";

export const metadata: Metadata = {
  title: 'Términos de Servicio - StartX369',
  description: 'Términos y condiciones de uso de la plataforma StartX369.',
  robots: 'index, follow',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Términos de Servicio</h1>
          <p className="text-center text-base-content/70 mb-12">
            Última actualización: 1 de enero de 2024
          </p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar StartX369, usted acepta estar sujeto a estos términos de servicio. 
                Si no está de acuerdo con cualquier parte de estos términos, no debe utilizar nuestro servicio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Descripción del Servicio</h2>
              <p>
                StartX369 es una plataforma integral de e-commerce y gestión empresarial que proporciona herramientas 
                para crear y administrar tiendas en línea, gestionar inventarios, procesar pagos, generar facturas 
                electrónicas y más.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Registro de Cuenta</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Debe proporcionar información precisa y completa al registrarse</li>
                <li>Es responsable de mantener la confidencialidad de su cuenta</li>
                <li>Debe notificar inmediatamente cualquier uso no autorizado</li>
                <li>Debe ser mayor de 18 años o tener autorización parental</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Uso Aceptable</h2>
              <p className="mb-4">Usted se compromete a no:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Usar el servicio para actividades ilegales o no autorizadas</li>
                <li>Interferir con la seguridad del servicio</li>
                <li>Transmitir virus, malware o código malicioso</li>
                <li>Intentar acceder a cuentas de otros usuarios</li>
                <li>Usar el servicio para enviar spam o comunicaciones no solicitadas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Facturación y Pagos</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Los pagos se procesan de forma segura a través de proveedores de terceros</li>
                <li>Las tarifas son cobradas por adelantado mensual o anualmente</li>
                <li>Los reembolsos están sujetos a nuestra política de reembolsos</li>
                <li>Los precios pueden cambiar con 30 días de aviso previo</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Propiedad Intelectual</h2>
              <p>
                StartX369 y todo su contenido, características y funcionalidad son propiedad de 
                StartX369 y están protegidos por derechos de autor, marcas comerciales y otras leyes 
                de propiedad intelectual.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Limitación de Responsabilidad</h2>
              <p>
                En ningún caso StartX369 será responsable por daños indirectos, incidentales, 
                especiales, consecuenciales o punitivos, incluyendo sin limitación, pérdida de 
                beneficios, datos, uso, buena voluntad u otras pérdidas intangibles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Terminación</h2>
              <p>
                Podemos terminar o suspender su cuenta inmediatamente, sin previo aviso o responsabilidad, 
                por cualquier motivo, incluyendo sin limitación si viola los Términos de Servicio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Ley Aplicable</h2>
              <p>
                Estos Términos se rigen e interpretan de acuerdo con las leyes de México, 
                sin tener en cuenta sus disposiciones sobre conflictos de leyes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Contacto</h2>
              <p>
                Si tiene preguntas sobre estos Términos de Servicio, puede contactarnos en:
                <br />
                Email: legal@startx369.com
                <br />
                Teléfono: +52 55 1234 5678
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 