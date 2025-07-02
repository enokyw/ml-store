import Link from "next/link";

const knowledgeCategories = [
  {
    title: '🎯 Guías de Inicio',
    links: [
      { title: 'Configuración inicial', href: '/docs' },
      { title: 'Agregar productos', href: '/docs' },
      { title: 'Configurar pagos', href: '/docs' },
      { title: 'Lanzar tu tienda', href: '/docs' }
    ]
  },
  {
    title: '🧾 Facturación',
    links: [
      { title: 'Configurar RFC y certificados', href: '/docs' },
      { title: 'Facturación automática', href: '/docs' },
      { title: 'Notas de crédito', href: '/docs' },
      { title: 'Reportes fiscales', href: '/docs' }
    ]
  },
  {
    title: '🔗 Integraciones',
    links: [
      { title: 'WhatsApp Business', href: '/docs' },
      { title: 'TikTok Shop', href: '/docs' },
      { title: 'Facebook & Instagram', href: '/docs' },
      { title: 'MercadoLibre', href: '/docs' }
    ]
  }
];

export function KnowledgeBase() {
  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Base de Conocimiento</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {knowledgeCategories.map((category, index) => (
            <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <h3 className="card-title">{category.title}</h3>
                <ul className="space-y-2 text-sm">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="link link-hover">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/docs" className="btn btn-primary btn-lg">
            Ver Toda la Documentación
          </Link>
        </div>
      </div>
    </section>
  );
} 