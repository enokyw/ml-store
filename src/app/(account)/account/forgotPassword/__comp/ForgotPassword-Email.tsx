import { Input } from '@/shared/components/custom/Input';
import Link from 'next/link';

interface ForgotPasswordEmailProps {
    email: string;
    onEmailChange: (email: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    error?: string;
    isLoading: boolean;
}

export const ForgotPasswordEmail = ({ email, onEmailChange, onSubmit, error, isLoading }: ForgotPasswordEmailProps) => {
    return (
        <div className="space-y-8 max-w-sm w-full mx-auto">
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-base-content mb-2">
                    ¿Olvidaste tu contraseña?
                </h1>
                <p className="text-base-content/50 text-sm font-medium">
                    Ingresa tu email y te enviaremos un enlace para restablecer tu contraseña
                </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
                <div className="w-full">
                    <Input
                        label="Correo electrónico"
                        placeholder="mail@site.com"
                        type="email"
                        value={email}
                        onChange={(e) => onEmailChange(e.target.value)}
                        className={error ? 'input-error' : ''}
                        required
                    />
                    {error && (
                        <p className="text-error text-sm mt-1">{error}</p>
                    )}
                </div>

                <button 
                    type="submit" 
                    className="w-full btn btn-primary font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="size-4 border-2 border-primary-content border-t-transparent rounded-full animate-spin"></div>
                            Enviando enlace...
                        </div>
                    ) : (
                        'Enviar enlace de restablecimiento'
                    )}
                </button>
            </form>

            <div className="text-center">
                <span className="text-base-content/60 text-sm">¿Recordaste tu contraseña? </span>
                <Link href="/account/signIn" className="text-primary font-semibold text-sm">
                    Volver al inicio de sesión
                </Link>
            </div>
        </div>
    );
}; 