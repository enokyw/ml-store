import { Metadata } from 'next';
import { Navbar } from "@/shared/components/custom/Navbar";
import { Footer } from "@/shared/components/footer/Footer";
import { ProductsSection } from "./__comp";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'StartX369 - Plataforma Completa de E-commerce y Gestión Empresarial',
  description: 'La solución integral para emprendedores y medianas empresas. Gestiona inventario, ventas, compras, facturación electrónica, cotizaciones y más desde una sola plataforma. Precios desde $9/mes.',
  keywords: ['e-commerce', 'gestión empresarial', 'inventario', 'facturación electrónica', 'cotizaciones', 'SAP', 'emprendedores'],
  openGraph: {
    title: 'StartX369 - Tu ERP Completo para E-commerce',
    description: 'Transforma tu negocio con nuestra plataforma integral. Desde inventario hasta facturación electrónica.',
    type: 'website',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StartX369 - Plataforma Completa de E-commerce',
    description: 'La solución integral para hacer crecer tu negocio. Prueba gratis 14 días.',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center max-w-6xl">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              StartX369
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-base-content/80">
              La plataforma completa de e-commerce para emprendedores y medianas empresas. 
              Gestiona inventario, ventas, compras y pagos desde un solo lugar.
            </p>
            <p className="text-lg md:text-xl mb-8 text-primary font-semibold">
              🚀 Rápido • 💰 Precios increíbles • 🔥 Todo integrado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/account/signUp" className="btn btn-primary btn-lg">
                Prueba Gratis 14 días
              </Link>
              <button className="btn btn-outline btn-lg">
                Ver Demo
              </button>
            </div>
            <p className="text-sm text-base-content/60 mt-4">
              Sin tarjeta de crédito requerida • Configuración en 5 minutos
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Todo lo que necesitas en una sola plataforma</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Desde la gestión de inventario hasta las ventas online, StartX369 te da todas las herramientas para hacer crecer tu negocio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="card-title text-xl">Gestión de Inventario</h3>
                <p>Control total de tu stock con alertas automáticas, códigos de barras y sincronización en tiempo real.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="card-title text-xl">E-commerce Completo</h3>
                <p>Tienda online profesional con carrito de compras, pagos seguros y diseño responsive.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="card-title text-xl">Vende Sin Inventario</h3>
                <p>Acceso a proveedores mayoristas verificados. Vende sin invertir en productos - el proveedor envía directo al cliente.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="card-title text-xl">Control Total de Logística</h3>
                <p>Gestión completa de envíos con seguimiento en tiempo real, integración con transportistas y cálculo automático de tarifas.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">🧾</div>
                <h3 className="card-title text-xl">Facturación Electrónica</h3>
                <p>Genera facturas fiscales automáticamente, cumple con el SAT y envía por email o WhatsApp.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="card-title text-xl">Cotizaciones</h3>
                <p>Crea cotizaciones profesionales y conviértelas en pedidos con un solo clic.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="card-title text-xl">Órdenes de Compra</h3>
                <p>Gestiona proveedores, genera órdenes de compra automáticas y controla tu cadena de suministro.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="card-title text-xl">Procesamiento de Pagos</h3>
                <p>Acepta todos los métodos de pago con las mejores tarifas del mercado y transferencias instantáneas.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="card-title text-xl">Reportes Avanzados</h3>
                <p>Dashboards intuitivos con métricas de ventas, rentabilidad y análisis de tendencias en tiempo real.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="card-title text-xl">Contabilidad</h3>
                <p>Lleva tu contabilidad al día con catálogos de cuentas, pólizas contables y balanzas automáticas.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="card-title text-xl">Análisis de Ventas</h3>
                <p>Métricas detalladas de rendimiento, productos más vendidos y tendencias de mercado para optimizar tu negocio.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="card-title text-xl">CRM Integrado</h3>
                <p>Gestiona clientes, leads, historial de compras y campañas de marketing desde un solo lugar.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">👨‍💼</div>
                <h3 className="card-title text-xl">Recursos Humanos</h3>
                <p>Gestiona empleados, nóminas, permisos y control de asistencia de forma simple y eficiente.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="card-title text-xl">Producción</h3>
                <p>Controla procesos productivos, materias primas, productos terminados y costos de fabricación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />

      {/* New Features Highlight Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Características Revolucionarias</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Descubre cómo estas funcionalidades pueden transformar tu negocio y llevarlo al siguiente nivel.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vender Sin Inventario */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl">🏪</div>
                  <div>
                    <h3 className="text-2xl font-bold">Vende Sin Inventario</h3>
                    <p className="text-lg text-primary font-semibold">Acceso a Proveedores Mayoristas</p>
                  </div>
                </div>
                <p className="text-lg mb-6">
                  Inicia tu e-commerce sin necesidad de invertir en productos o gestionar un almacén. 
                  Nuestra plataforma te da acceso instantáneo a un extenso catálogo de artículos de 
                  proveedores mayoristas verificados.
                </p>
                <p className="mb-6">
                  Simplemente elige qué vender, y cuando un cliente te compre, el proveedor se 
                  encargará de enviar el pedido directamente. Es la forma más rápida y segura de 
                  lanzar tu tienda online con una inversión mínima.
                </p>
                <div className="badge badge-success badge-lg">🚀 Inversión Mínima</div>
              </div>
            </div>

            {/* Control de Logística */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl">🚚</div>
                  <div>
                    <h3 className="text-2xl font-bold">Control Total de tu Logística</h3>
                    <p className="text-lg text-primary font-semibold">Gestión Completa de Envíos</p>
                  </div>
                </div>
                <p className="text-lg mb-6">
                  Optimiza tu operación y ofrece la mejor experiencia de compra con nuestro módulo 
                  de gestión logística. Desde un solo panel, controla todo el proceso de envío, 
                  desde el cálculo de tarifas hasta la entrega final.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-success text-lg">✓</span>
                      <span className="text-sm">Gestión de Pedidos Centralizada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-success text-lg">✓</span>
                      <span className="text-sm">Seguimiento en Tiempo Real</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-success text-lg">✓</span>
                      <span className="text-sm">Integración con Transportistas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-success text-lg">✓</span>
                      <span className="text-sm">Cálculo de Tarifas Automático</span>
                    </div>
                  </div>
                </div>
                <div className="badge badge-info badge-lg">📦 Experiencia Premium</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Conecta con tus plataformas favoritas</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Integración nativa con las principales redes sociales y plataformas de venta para maximizar tu alcance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="flex flex-col items-center p-4 bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">📱</div>
              <span className="font-semibold">TikTok Shop</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">💬</div>
              <span className="font-semibold">WhatsApp</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">📘</div>
              <span className="font-semibold">Facebook</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">📷</div>
              <span className="font-semibold">Instagram</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">🛍️</div>
              <span className="font-semibold">MercadoLibre</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">🌐</div>
              <span className="font-semibold">Shopify</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Precios que se adaptan a tu crecimiento</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Sin costos ocultos, sin sorpresas. Solo paga por lo que usas y escala cuando tu negocio crezca.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">Emprendedor</h3>
                <div className="text-4xl font-bold text-primary mb-2">$9<span className="text-lg font-normal">/mes</span></div>
                <p className="text-base-content/70 mb-6">Perfecto para empezar</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    Hasta 100 productos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    1 tienda online
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    Catálogo básico de proveedores
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    Logística básica
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    Soporte por email
                  </li>
                </ul>
                <button className="btn btn-outline btn-block">Comenzar</button>
              </div>
            </div>
            
            <div className="card bg-primary text-primary-content shadow-xl scale-105">
              <div className="card-body">
                <div className="badge badge-secondary mb-2">Más Popular</div>
                <h3 className="card-title text-2xl mb-4">Profesional</h3>
                <div className="text-4xl font-bold mb-2">$29<span className="text-lg font-normal">/mes</span></div>
                <p className="text-primary-content/70 mb-6">Para empresas en crecimiento</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    Productos ilimitados
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    5 tiendas online
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    Catálogo completo de proveedores
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    Logística avanzada con seguimiento
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    Todas las integraciones
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    Soporte prioritario
                  </li>
                </ul>
                <button className="btn btn-secondary btn-block">Elegir Plan</button>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">Empresarial</h3>
                <div className="text-4xl font-bold text-primary mb-2">$99<span className="text-lg font-normal">/mes</span></div>
                <p className="text-base-content/70 mb-6">Para operaciones grandes</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    Todo en Profesional
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    Tiendas ilimitadas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    Red premium de proveedores
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    Logística empresarial completa
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    API personalizada
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    Gerente de cuenta
                  </li>
                </ul>
                <button className="btn btn-outline btn-block">Contactar</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="rating mb-4">
                  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked readOnly />
                  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked readOnly />
                  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked readOnly />
                  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked readOnly />
                  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked readOnly />
                </div>
                <p className="mb-4">"StartX369 transformó completamente mi negocio. En 3 meses aumenté mis ventas un 300% gracias a las integraciones con redes sociales."</p>
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-12">
                      <span>M</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">María González</div>
                    <div className="text-sm text-base-content/70">Tienda de Ropa Online</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="rating mb-4">
                  <input type="radio" name="rating-2" className="mask mask-star" defaultChecked readOnly />
                  <input type="radio" name="rating-2" className="mask mask-star" defaultChecked readOnly />
                  <input type="radio" name="rating-2" className="mask mask-star" defaultChecked readOnly />
                  <input type="radio" name="rating-2" className="mask mask-star" defaultChecked readOnly />
                  <input type="radio" name="rating-2" className="mask mask-star" defaultChecked readOnly />
                </div>
                <p className="mb-4">"Empecé sin inventario usando sus proveedores mayoristas. En solo 2 meses ya tengo mi negocio rentable sin haber invertido en stock."</p>
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-12">
                      <span>C</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Carlos Rodríguez</div>
                    <div className="text-sm text-base-content/70">Tienda Online</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="rating mb-4">
                  <input type="radio" name="rating-3" className="mask mask-star" defaultChecked readOnly />
                  <input type="radio" name="rating-3" className="mask mask-star" defaultChecked readOnly />
                  <input type="radio" name="rating-3" className="mask mask-star" defaultChecked readOnly />
                  <input type="radio" name="rating-3" className="mask mask-star" defaultChecked readOnly />
                  <input type="radio" name="rating-3" className="mask mask-star" defaultChecked readOnly />
                </div>
                <p className="mb-4">"El sistema de logística es increíble. Mis clientes reciben seguimiento automático y yo controlo todo desde un panel. ¡Servicio profesional!"</p>
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-12">
                      <span>L</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Luis Morales</div>
                    <div className="text-sm text-base-content/70">E-commerce Deportivo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para hacer crecer tu negocio?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Únete a miles de emprendedores que ya están vendiendo sin inventario y gestionando 
            su logística como profesionales. Prueba gratis por 14 días, sin compromisos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/account/signUp" className="btn btn-secondary btn-lg">
              Comenzar Prueba Gratuita
            </Link>
            <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
              Hablar con Ventas
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            14 días gratis • No se requiere tarjeta de crédito • Soporte 24/7
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
