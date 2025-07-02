import Link from 'next/link'

export default function ServerError() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-error/5 flex items-center justify-center p-4">
      <div className="container max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Illustration Section */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              {/* Main 500 Number */}
              <div className="text-[10rem] sm:text-[14rem] lg:text-[18rem] font-black text-error/20 leading-none select-none">
                500
              </div>
              
              {/* Server Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-base-100 rounded-xl p-8 shadow-2xl border border-base-300">
                  <div className="relative">
                    <svg className="w-16 h-16 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {/* Error indicator */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-error rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-3 h-3 text-error-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-4 animate-bounce delay-100">
                <div className="w-3 h-3 bg-error rounded-full opacity-60"></div>
              </div>
              <div className="absolute top-8 right-12 animate-bounce delay-200">
                <div className="w-2 h-2 bg-warning rounded-full opacity-60"></div>
              </div>
              <div className="absolute bottom-8 left-12 animate-bounce delay-300">
                <div className="w-4 h-4 bg-error rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <div className="badge badge-error badge-lg">
                Error del Servidor
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-base-content">
                Error Interno del Servidor
              </h1>
              
              <p className="text-lg sm:text-xl text-base-content/70 max-w-lg mx-auto lg:mx-0">
                Estamos experimentando problemas técnicos en nuestros servidores. 
                Nuestro equipo está trabajando para resolverlo lo antes posible.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="javascript:location.reload()" className="btn btn-primary btn-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Recargar Página
              </Link>
              
              <Link href="/" className="btn btn-outline btn-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Volver al Inicio
              </Link>
            </div>

            {/* Status Information */}
            <div className="card bg-base-200/50 border border-base-300/50">
              <div className="card-body p-6">
                <h3 className="card-title text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ¿Qué está pasando?
                </h3>
                <p className="text-base-content/70 text-sm">
                  Nuestros servidores están experimentando una alta carga o un problema técnico. 
                  El equipo de desarrollo ha sido notificado automáticamente y está investigando el problema.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <div className="badge badge-outline">
                    <div className="w-2 h-2 bg-error rounded-full mr-2 animate-pulse"></div>
                    Servicio Interrumpido
                  </div>
                  <div className="badge badge-outline">
                    <div className="w-2 h-2 bg-warning rounded-full mr-2"></div>
                    Investigando
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="alert alert-warning">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 6.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <h3 className="font-bold">¿El problema persiste?</h3>
                <div className="text-sm">
                  Si el problema continúa después de varios intentos, contáctanos en{' '}
                  <a href="mailto:soporte@tuapp.com" className="link link-primary">
                    soporte@tuapp.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">¿Qué puedes hacer mientras tanto?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card bg-base-200 border border-base-300">
              <div className="card-body text-center">
                <div className="w-12 h-12 bg-info/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold">Espera unos minutos</h3>
                <p className="text-sm text-base-content/70">
                  Los problemas del servidor suelen resolverse rápidamente
                </p>
              </div>
            </div>

            <div className="card bg-base-200 border border-base-300">
              <div className="card-body text-center">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold">Verifica el estado</h3>
                <p className="text-sm text-base-content/70">
                  Consulta nuestro estado del servicio en tiempo real
                </p>
              </div>
            </div>

            <div className="card bg-base-200 border border-base-300">
              <div className="card-body text-center">
                <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold">Contacta soporte</h3>
                <p className="text-sm text-base-content/70">
                  Si necesitas ayuda urgente, estamos aquí para ayudarte
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 