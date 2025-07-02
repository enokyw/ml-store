'use client';

import Link from "next/link";
import { useState } from 'react';

export function ContactOptions() {
  const [chatStatus, setChatStatus] = useState<'online' | 'offline'>('online');

  const handleStartChat = () => {
    // Aquí iría la lógica para iniciar el chat
    console.log('Iniciando chat...');
  };

  const handleCallNow = () => {
    // Aquí iría la lógica para iniciar llamada
    window.open('tel:+525512345678', '_self');
  };

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contacta con Nosotros</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Chat en Vivo */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="card-title justify-center mb-4">Chat en Vivo</h3>
              <p className="mb-6">Habla directamente con nuestro equipo de soporte</p>
              <div className={`badge ${chatStatus === 'online' ? 'badge-success' : 'badge-error'} badge-sm mb-4`}>
                {chatStatus === 'online' ? '🟢 En línea' : '🔴 Fuera de línea'}
              </div>
              <button 
                onClick={handleStartChat}
                className="btn btn-primary btn-block"
                disabled={chatStatus === 'offline'}
              >
                Iniciar Chat
              </button>
              <p className="text-sm text-base-content/60 mt-2">
                Tiempo promedio: {chatStatus === 'online' ? '2 minutos' : 'No disponible'}
              </p>
            </div>
          </div>
          
          {/* Email */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="card-title justify-center mb-4">Email</h3>
              <p className="mb-6">Envíanos un mensaje detallado sobre tu consulta</p>
              <div className="mb-4 text-sm">soporte@startx369.com</div>
              <Link href="/contact" className="btn btn-outline btn-block">Enviar Email</Link>
              <p className="text-sm text-base-content/60 mt-2">Respuesta en 4-6 horas</p>
            </div>
          </div>
          
          {/* Teléfono */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="card-title justify-center mb-4">Teléfono</h3>
              <p className="mb-6">Llámanos para soporte urgente o consultorías</p>
              <div className="mb-4 font-bold">+52 55 1234 5678</div>
              <button 
                onClick={handleCallNow}
                className="btn btn-success btn-block"
              >
                Llamar Ahora
              </button>
              <p className="text-sm text-base-content/60 mt-2">Lun-Vie 9AM-7PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 