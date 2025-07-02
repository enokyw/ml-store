import Link from 'next/link'

export default function AccessDenied() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-warning/5 to-base-200 flex items-center justify-center p-4">
      <div className="container max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Illustration Section */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              {/* Lock Icon Background */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-warning/10 to-error/10 rounded-3xl flex items-center justify-center transform rotate-12">
                <div className="w-56 h-56 sm:w-64 sm:h-64 bg-base-100 rounded-2xl flex items-center justify-center shadow-2xl transform -rotate-12">
                  <svg className="w-24 h-24 sm:w-32 sm:h-32 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              
              {/* Floating Shield Icons */}
              <div className="absolute -top-6 -left-6 animate-bounce delay-100">
                <div className="w-12 h-12 bg-error/20 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 animate-bounce delay-200">
                <div className="w-10 h-10 bg-warning/20 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 6.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <div className="badge badge-warning badge-lg">
                Acceso Denegado
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-base-content">
                Acceso Restringido
              </h1>
              
              <p className="text-lg sm:text-xl text-base-content/70 max-w-lg mx-auto lg:mx-0">
                No tienes permisos para acceder a esta sección o el tenant especificado 
                no es válido. Verifica tus credenciales o contacta al administrador.
              </p>
            </div>

            {/* Reasons */}
            <div className="card bg-base-200/50 border border-base-300/50">
              <div className="card-body p-6">
                <h3 className="card-title text-lg mb-4">Posibles razones:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-base-content/70">
                      El tenant especificado no existe o ha sido desactivado
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-base-content/70">
                      Tu cuenta no tiene permisos para acceder a este tenant
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-base-content/70">
                      La URL ingresada no es válida o contiene errores
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-base-content/70">
                      Tu sesión ha expirado y necesitas iniciar sesión nuevamente
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/account/signIn" className="btn btn-primary btn-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Iniciar Sesión
              </Link>
              
              <Link href="/" className="btn btn-outline btn-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Ir al Inicio
              </Link>
            </div>

            {/* Help Section */}
            <div className="alert alert-info">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-bold">¿Necesitas ayuda?</h3>
                <div className="text-sm">
                  Si crees que deberías tener acceso, contacta al administrador del sistema o{' '}
                  <a href="mailto:admin@tuapp.com" className="link link-primary">
                    envía un email a soporte
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-16 text-center">
          <div className="card bg-base-200 border border-base-300 max-w-2xl mx-auto">
            <div className="card-body p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg className="w-8 h-8 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-xl font-bold">Aviso de Seguridad</h3>
              </div>
              <p className="text-base-content/70 text-sm leading-relaxed">
                Este intento de acceso ha sido registrado por motivos de seguridad. 
                Si no autorizaste esta acción, por favor contacta inmediatamente 
                al equipo de seguridad de la plataforma.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <Link href="/help/security" className="link link-primary text-sm">
                  Políticas de Seguridad
                </Link>
                <Link href="/help/contact" className="link link-primary text-sm">
                  Reportar Incidente
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 