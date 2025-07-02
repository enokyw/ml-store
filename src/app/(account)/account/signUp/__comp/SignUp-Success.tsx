import Link from 'next/link';

interface SignUpSuccessProps {
    email: string;
    firstName: string;
    onResendEmail: () => void;
    onVerifyManually: () => void;
    isResending: boolean;
}

export const SignUpSuccess = ({ email, firstName, onResendEmail, onVerifyManually, isResending }: SignUpSuccessProps) => {
    return (
        <div className="space-y-8 max-w-sm w-full mx-auto">
            <div className="text-center">
                {/* Success Icon */}
                <div className="flex justify-center mb-4">
                    <div className="size-16 bg-success/20 rounded-full flex items-center justify-center">
                        <svg className="size-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-base-content mb-2">
                    ¡Cuenta creada con éxito!
                </h1>
                <p className="text-base-content/50 text-sm font-medium">
                    Hola <span className="font-semibold text-base-content">{firstName}</span>, 
                    hemos enviado un email de verificación a{' '}
                    <span className="font-semibold text-base-content">{email}</span>
                </p>
            </div>

            <div className="space-y-4">
                <div className="bg-base-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                        <svg className="size-5 text-info mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-sm text-base-content/70">
                            <p className="font-medium mb-1">Verifica tu email para continuar</p>
                            <p>Haz clic en el enlace del email para activar tu cuenta. No olvides revisar tu carpeta de spam.</p>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={onVerifyManually}
                    className="w-full btn btn-primary font-medium py-3 px-4 rounded-lg transition-colors"
                >
                    Tengo un código de verificación
                </button>

                <button 
                    onClick={onResendEmail}
                    className="w-full btn btn-outline font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                    disabled={isResending}
                >
                    {isResending ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="size-4 border-2 border-base-content border-t-transparent rounded-full animate-spin"></div>
                            Reenviando...
                        </div>
                    ) : (
                        'Reenviar email de verificación'
                    )}
                </button>
            </div>

            <div className="text-center">
                <span className="text-base-content/60 text-sm">¿Ya tienes una cuenta? </span>
                <Link href="/account/signIn" className="text-primary font-semibold text-sm">
                    Inicia sesión
                </Link>
            </div>
        </div>
    );
}; 