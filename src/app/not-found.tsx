import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300 flex items-center justify-center p-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Illustration Section */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              {/* Main 404 Number */}
              <div className="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-black text-primary/30 leading-none select-none">
                404
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 left-4 animate-bounce">
                <div className="w-4 h-4 bg-accent rounded-full opacity-60"></div>
              </div>
              <div className="absolute top-16 right-8 animate-bounce delay-75">
                <div className="w-3 h-3 bg-secondary rounded-full opacity-60"></div>
              </div>
              <div className="absolute bottom-16 left-8 animate-bounce delay-150">
                <div className="w-5 h-5 bg-primary rounded-full opacity-60"></div>
              </div>
              
              {/* Search Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-base-100 rounded-full p-6 shadow-xl">
                  <svg className="w-12 h-12 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-base-content">
                ¡Oops! Página no encontrada
              </h1>
              <p className="text-lg sm:text-xl text-base-content/70 max-w-lg mx-auto lg:mx-0">
                La página que buscas no existe o ha sido movida. No te preocupes, 
                te ayudamos a encontrar lo que necesitas.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/" className="btn btn-primary btn-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Ir al Inicio
              </Link>
              
              <Link href="javascript:history.back()" className="btn btn-outline btn-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver Atrás
              </Link>
            </div>

            {/* Help Section */}
            <div className="card bg-base-200/50 border border-base-300/50 backdrop-blur-sm">
              <div className="card-body p-6">
                <h3 className="card-title text-lg">¿Necesitas ayuda?</h3>
                <p className="text-base-content/70">
                  Si crees que esto es un error, contáctanos o intenta con estos enlaces útiles:
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Link href="/dashboard" className="link link-primary text-sm">
                    Dashboard
                  </Link>
                  <Link href="/account" className="link link-primary text-sm">
                    Mi Cuenta
                  </Link>
                  <Link href="/help" className="link link-primary text-sm">
                    Centro de Ayuda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Code */}
        <div className="text-center mt-12">
          <div className="badge badge-outline badge-lg">
            Error 404 - Página no encontrada
          </div>
        </div>
      </div>
    </div>
  )
} 