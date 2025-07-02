'use client';

import { useState, useEffect } from 'react';

interface SystemService {
  name: string;
  status: 'operational' | 'degraded' | 'down';
}

const services: SystemService[] = [
  { name: 'E-commerce', status: 'operational' },
  { name: 'Facturación', status: 'operational' },
  { name: 'Integraciones', status: 'operational' },
  { name: 'API', status: 'operational' }
];

export function SystemStatus() {
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [systemServices, setSystemServices] = useState<SystemService[]>(services);

  useEffect(() => {
    // Simular actualizaciones del estado del sistema cada 30 segundos
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: SystemService['status']) => {
    switch (status) {
      case 'operational':
        return 'bg-success';
      case 'degraded':
        return 'bg-warning';
      case 'down':
        return 'bg-error';
      default:
        return 'bg-base-300';
    }
  };

  const getOverallStatus = () => {
    const hasDown = systemServices.some(service => service.status === 'down');
    const hasDegraded = systemServices.some(service => service.status === 'degraded');
    
    if (hasDown) return { text: 'Problemas detectados', color: 'badge-error', icon: '🔴' };
    if (hasDegraded) return { text: 'Rendimiento degradado', color: 'badge-warning', icon: '🟡' };
    return { text: 'Todos los sistemas operativos', color: 'badge-success', icon: '🟢' };
  };

  const formatLastUpdate = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Hace menos de 1 minuto';
    if (diffInMinutes === 1) return 'Hace 1 minuto';
    return `Hace ${diffInMinutes} minutos`;
  };

  const overallStatus = getOverallStatus();

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Estado del Sistema</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className={`badge ${overallStatus.color} badge-lg`}>
              {overallStatus.icon} {overallStatus.text}
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {systemServices.map((service, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-3 h-3 ${getStatusColor(service.status)} rounded-full`}></div>
                <span className="text-sm">{service.name}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-base-content/60 mt-4">
            Última actualización: {formatLastUpdate(lastUpdate)}
          </p>
        </div>
      </div>
    </section>
  );
} 