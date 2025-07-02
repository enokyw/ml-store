import Link from 'next/link';
import { SignUpOAuthButtons } from './SignUp-OAuthButtons';

interface SignUpMainProps {
    onEmailClick: () => void;
    onOAuthClick: (provider: 'google' | 'facebook' | 'apple') => void;
}

export const SignUpMain = ({ onEmailClick, onOAuthClick }: SignUpMainProps) => {
    return (
        <div className="space-y-6 max-w-sm w-full mx-auto">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-base-content mb-2">
                    Regístrate en StartX369
                </h1>
                <p className="text-base-content/50 text-sm font-medium">
                    Crea un perfil, inpulsa tu negocio y conectate con otros usuarios.
                </p>
            </div>

            {/* Auth options */}
            <SignUpOAuthButtons onEmailClick={onEmailClick} onOAuthClick={onOAuthClick} />

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

            {/* Login link */}
            <div className="text-center">
                <span className="text-base-content">¿Ya tienes una cuenta? </span>
                <Link href="/account/signIn" className="text-primary font-semibold">
                    Inicia sesión
                </Link>
            </div>
        </div>
    );
}; 