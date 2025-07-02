import { Metadata } from 'next';
import { Navbar } from "@/shared/components/custom/Navbar";
import { Footer } from "@/shared/components/footer/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Documentación - StartX369',
  description: 'Guías completas, tutoriales y documentación técnica para aprovechar al máximo StartX369.',
  keywords: ['documentación', 'guías', 'tutoriales', 'API', 'StartX369'],
};

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              📚 Documentación
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-base-content/80">
              Todo lo que necesitas saber para dominar StartX369 y maximizar el potencial de tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#getting-started" className="btn btn-primary btn-lg">
                Comenzar
              </a>
              <a href="#api" className="btn btn-outline btn-lg">
                API Reference
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#getting-started" className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="card-body text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                <h3 className="card-title justify-center">Primeros Pasos</h3>
                <p>Configura tu cuenta y lanza tu primera tienda</p>
              </div>
            </a>
            
            <a href="#features" className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="card-body text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚙️</div>
                <h3 className="card-title justify-center">Características</h3>
                <p>Aprende sobre todas las funcionalidades</p>
              </div>
            </a>
            
            <a href="#integrations" className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="card-body text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔗</div>
                <h3 className="card-title justify-center">Integraciones</h3>
                <p>Conecta con tus plataformas favoritas</p>
              </div>
            </a>
            
            <a href="#api" className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="card-body text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💻</div>
                <h3 className="card-title justify-center">API</h3>
                <p>Desarrolla integraciones personalizadas</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">🚀 Primeros Pasos</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="badge badge-primary badge-lg">1</div>
                    <h3 className="text-xl font-bold">Crear tu Cuenta</h3>
                  </div>
                  <p className="mb-4">Regístrate gratis y obtén acceso inmediato a todas las funcionalidades básicas.</p>
                  <div className="mockup-code">
                    <pre data-prefix="$"><code>curl -X POST https://api.startx369.com/register</code></pre>
                  </div>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="badge badge-primary badge-lg">2</div>
                    <h3 className="text-xl font-bold">Configurar tu Tienda</h3>
                  </div>
                  <p>Personaliza tu tienda con información básica, logos y configuración de envíos.</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Sube tu logo y configura colores</li>
                    <li>Establece métodos de pago</li>
                    <li>Configura zonas de envío</li>
                    <li>Agrega información fiscal</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="badge badge-primary badge-lg">3</div>
                    <h3 className="text-xl font-bold">Agregar Productos</h3>
                  </div>
                  <p>Carga tu inventario usando nuestras herramientas intuitivas o importación masiva.</p>
                  <div className="mockup-code">
                    <pre data-prefix="📝"><code>Importar CSV, Excel o API</code></pre>
                    <pre data-prefix="📷"><code>Subir imágenes automáticamente</code></pre>
                    <pre data-prefix="🏷️"><code>Generar códigos de barras</code></pre>
                  </div>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="badge badge-primary badge-lg">4</div>
                    <h3 className="text-xl font-bold">¡Lanzar!</h3>
                  </div>
                  <p>Tu tienda estará lista para recibir pedidos en minutos.</p>
                  <div className="flex gap-2 mt-4">
                    <Link href="/account/signUp" className="btn btn-primary btn-sm">
                      Comenzar Ahora
                    </Link>
                    <Link href="/support" className="btn btn-outline btn-sm">
                      ¿Necesitas Ayuda?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Documentation */}
      <section id="features" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">⚙️ Guía de Características</h2>
          
          <div className="space-y-12">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="text-2xl font-bold mb-4">🧾 Facturación Electrónica</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Configuración Inicial</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Registra tu RFC y certificados SAT</li>
                      <li>Configura series y folios</li>
                      <li>Establece datos fiscales</li>
                      <li>Conecta con el PAC autorizado</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Funcionalidades</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Facturación automática por venta</li>
                      <li>Facturación global diaria</li>
                      <li>Notas de crédito y cancelaciones</li>
                      <li>Reportes fiscales mensuales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="text-2xl font-bold mb-4">📝 Sistema de Cotizaciones</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Crear Cotizaciones</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Plantillas personalizables</li>
                      <li>Cálculo automático de impuestos</li>
                      <li>Descuentos y promociones</li>
                      <li>Validez y términos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Gestión y Seguimiento</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Estados: Pendiente, Aprobada, Rechazada</li>
                      <li>Conversión automática a pedido</li>
                      <li>Historial y versiones</li>
                      <li>Notificaciones automáticas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section id="api" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">💻 Documentación API</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-bold mb-4">Autenticación</h3>
                <p className="mb-4">Todas las requests requieren autenticación mediante API Key.</p>
                <div className="mockup-code">
                  <pre data-prefix="curl"><code>-H "Authorization: Bearer YOUR_API_KEY"</code></pre>
                  <pre data-prefix="curl"><code>-H "Content-Type: application/json"</code></pre>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-bold mb-4">Endpoints Principales</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="badge badge-success badge-sm">GET</span> <code>/api/products</code> - Listar productos</div>
                  <div><span className="badge badge-info badge-sm">POST</span> <code>/api/products</code> - Crear producto</div>
                  <div><span className="badge badge-warning badge-sm">PUT</span> <code>/api/products/:id</code> - Actualizar</div>
                  <div><span className="badge badge-error badge-sm">DEL</span> <code>/api/products/:id</code> - Eliminar</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/docs/api" className="btn btn-primary btn-lg">
              Ver Documentación Completa de API
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}