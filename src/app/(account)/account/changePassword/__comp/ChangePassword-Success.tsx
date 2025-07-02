import Link from 'next/link';

interface ChangePasswordSuccessProps {
    onContinue: () => void;
}

export const ChangePasswordSuccess = ({ onContinue }: ChangePasswordSuccessProps) => {
    return (
        <div className="space-y-8 max-w-sm w-full mx-auto">
            <div className="text-center">
                {/* Success Icon */}
                <div className="flex justify-center mb-4">
                    <div className="size-16 bg-success/20 rounded-full flex items-center justify-center">
                        <svg className="size-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-base-content mb-2">
                    ¡Contraseña actualizada!
                </h1>
                <p className="text-base-content/50 text-sm font-medium">
                    Tu contraseña ha sido cambiada exitosamente. Tu cuenta ahora está más segura.
                </p>
            </div>

            <div className="space-y-4">
                <div className="bg-base-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                        <svg className="size-5 text-info mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <div className="text-sm text-base-content/70">
                            <p className="font-medium mb-1">Consejos de seguridad</p>
                            <ul className="space-y-1">
                                <li>• No compartas tu contraseña con nadie</li>
                                <li>• Usa contraseñas únicas para cada cuenta</li>
                                <li>• Considera usar un gestor de contraseñas</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={onContinue}
                    className="w-full btn btn-primary font-medium py-3 px-4 rounded-lg transition-colors"
                >
                    Continuar
                </button>
            </div>

            <div className="text-center">
                <span className="text-base-content/60 text-sm">¿Necesitas ayuda? </span>
                <Link href="/support" className="text-primary font-semibold text-sm">
                    Contactar soporte
                </Link>
            </div>
        </div>
    );
}; 