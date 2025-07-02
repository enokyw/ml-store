const helpOptions = [
  {
    icon: '🚀',
    title: 'Primeros Pasos',
    description: 'Configura tu cuenta y lanza tu primera tienda',
    href: '/docs'
  },
  {
    icon: '💳',
    title: 'Pagos y Facturación',
    description: 'Problemas con cobros o facturación electrónica',
    href: '/docs'
  },
  {
    icon: '🔧',
    title: 'Problemas Técnicos',
    description: 'Reporta bugs o problemas de funcionamiento',
    href: '/contact'
  },
  {
    icon: '🔗',
    title: 'Integraciones',
    description: 'Ayuda con WhatsApp, TikTok y otras plataformas',
    href: '/docs'
  }
];

export function QuickHelpOptions() {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¿Cómo podemos ayudarte?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpOptions.map((option, index) => (
            <div key={index} className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="card-body text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{option.icon}</div>
                <h3 className="card-title justify-center">{option.title}</h3>
                <p>{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 