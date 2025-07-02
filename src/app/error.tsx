'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  const handleReset = () => {
    reset()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-error/5 via-base-100 to-warning/5 flex items-center justify-center p-4">
      <div className="container max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Illustration Section */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              {/* Error Icon Background */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-error/10 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-error/20 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 6.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
              
              {/* Floating Alert Icons */}
              <div className="absolute -top-4 -left-4 animate-bounce">
                <div className="alert alert-warning p-2 shadow-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 animate-bounce delay-75">
                <div className="alert alert-error p-2 shadow-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <div className="badge badge-error badge-lg mb-4">
                Error del Sistema
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-base-content">
                ¡Algo salió mal!
              </h1>
              
              <p className="text-lg sm:text-xl text-base-content/70 max-w-lg mx-auto lg:mx-0">
                Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado 
                y está trabajando para solucionarlo.
              </p>
            </div>

            {/* Error Details */}
            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                Ver detalles técnicos
              </div>
              <div className="collapse-content">
                <div className="bg-base-300 rounded-lg p-4 text-sm font-mono overflow-x-auto">
                  <p className="text-error font-semibold mb-2">Error:</p>
                  <p className="text-base-content/80 break-all">
                    {error.message || 'Error desconocido'}
                  </p>
                  {error.digest && (
                    <>
                      <p className="text-warning font-semibold mt-3 mb-2">ID del Error:</p>
                      <p className="text-base-content/80 break-all">{error.digest}</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleReset}
                className="btn btn-primary btn-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Intentar de Nuevo
              </button>
              
              <Link href="/" className="btn btn-outline btn-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Ir al Inicio
              </Link>
            </div>

            {/* Support Section */}
            <div className="alert alert-info">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-bold">¿El problema persiste?</h3>
                <div className="text-sm">
                  Contáctanos en{' '}
                  <a href="mailto:soporte@tuapp.com" className="link link-primary">
                    soporte@tuapp.com
                  </a>{' '}
                  o{' '}
                  <Link href="/support" className="link link-primary">
                    abre un ticket de soporte
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Actions */}
        <div className="text-center mt-12">
          <div className="stats stats-horizontal shadow bg-base-200">
            <div className="stat">
              <div className="stat-title">Estado del Sistema</div>
              <div className="stat-value text-success text-lg">Operativo</div>
              <div className="stat-desc">Servicios principales funcionando</div>
            </div>
            
            <div className="stat">
              <div className="stat-title">Tiempo de Respuesta</div>
              <div className="stat-value text-info text-lg">&lt; 2s</div>
              <div className="stat-desc">Promedio últimas 24h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 