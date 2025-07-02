'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface MenuItem {
  label: string;
  href: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { label: 'Características', href: '#features', icon: '⚡' },
  { label: 'Precios', href: '#pricing', icon: '💰' },
  { label: 'Integraciones', href: '#integrations', icon: '🔗' },
  { label: 'Documentación', href: '/docs', icon: '📚' },
  { label: 'Soporte', href: '/support', icon: '🛟' },
  { label: 'Contacto', href: '/contact', icon: '📞' },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="btn btn-ghost btn-circle lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed h-screen inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-screen w-full sm:w-80 bg-base-100 z-50 lg:hidden transform transition-transform duration-300 ease-out shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-base-200">
                <span className="text-lg font-bold">Menú</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={closeMenu}
                    className="btn btn-ghost btn-circle btn-sm"
                    aria-label="Close menu"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1 px-4">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors group"
                      >
                        <span className="text-xl group-hover:scale-110 transition-transform">
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="divider mx-4"></div>

                {/* Action Buttons */}
                <div className="px-4 space-y-3">
                  <Link 
                    href="/account/signIn" 
                    className="btn btn-outline btn-block"
                    onClick={closeMenu}
                  >
                    Iniciar Sesión
                  </Link>
                  <Link 
                    href="/account/signUp" 
                    className="btn btn-primary btn-block"
                    onClick={closeMenu}
                  >
                    Empezar Gratis
                  </Link>
                </div>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-base-200">
                <div className="text-center text-sm text-base-content/60">
                  <p>StartX369</p>
                  <p>© 2024 Todos los derechos reservados</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
} 