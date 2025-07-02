import Link from 'next/link';
import { SignInOAuthButtons } from './SignIn-OAuthButtons';

interface SignInMainProps {
    onEmailClick: () => void;
    onOAuthClick: (provider: 'google' | 'facebook' | 'apple') => void;
}

export const SignInMain = ({ onEmailClick, onOAuthClick }: SignInMainProps) => {
    return (
        <div className="space-y-6 max-w-sm w-full mx-auto">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-base-content mb-2">
                    Inicia sesión en StartX369
                </h1>
                <p className="text-base-content/50 text-sm font-medium">
                    Bienvenido de vuelta. Ingresa a tu cuenta para continuar.
                </p>
            </div>

            {/* Auth options */}
            <SignInOAuthButtons onEmailClick={onEmailClick} onOAuthClick={onOAuthClick} />

            {/* Terms */}
            <div className="text-center text-xs text-base-content/60 leading-relaxed">
                Al continuar con una cuenta ubicada en <span className="font-medium">Perú</span>, aceptas nuestros{' '}
                <Link href="/terms" className="font-medium text-base-content underline">
                    Términos de Servicio
                </Link>{' '}
                y confirmas que has leído nuestra{' '}
                <Link href="/privacy" className="font-medium text-base-content underline">
                    Política de Privacidad
                </Link>
                .
            </div>

            {/* Sign up link */}
            <div className="text-center">
                <span className="text-base-content">¿No tienes una cuenta? </span>
                <Link href="/account/signUp" className="text-primary font-semibold">
                    Regístrate
                </Link>
            </div>
        </div>
    );
}; 