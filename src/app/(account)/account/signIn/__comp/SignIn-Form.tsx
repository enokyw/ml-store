import { Input } from '@/shared/components/custom/Input';
import Link from 'next/link';

interface SignInFormProps {
    email: string;
    password: string;
    onEmailChange: (email: string) => void;
    onPasswordChange: (password: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    errors: Record<string, string>;
    isLoading: boolean;
}

export const SignInForm = ({ 
    email, 
    password, 
    onEmailChange, 
    onPasswordChange, 
    onSubmit, 
    errors, 
    isLoading 
}: SignInFormProps) => {
    return (
        <div className="space-y-8 max-w-sm w-full mx-auto">
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-base-content mb-2">
                    Inicia sesión
                </h1>
                <p className="text-base-content/50 text-sm font-medium">
                    Ingresa tu email y contraseña para continuar
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
                        className={errors.email ? 'input-error' : ''}
                        required
                    />
                    {errors.email && (
                        <p className="text-error text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                <div className="w-full">
                    <Input
                        label="Contraseña"
                        placeholder="Tu contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => onPasswordChange(e.target.value)}
                        className={errors.password ? 'input-error' : ''}
                        required
                    />
                    {errors.password && (
                        <p className="text-error text-sm mt-1">{errors.password}</p>
                    )}
                </div>

                <div className="flex justify-end">
                    <Link href="/account/forgotPassword" className="text-sm text-primary font-medium hover:underline">
                        ¿Olvidaste tu contraseña?
                    </Link>
                </div>

                {errors.general && (
                    <div className="bg-error border border-error-content text-error-content px-4 py-3 rounded-lg text-sm">
                        {errors.general}
                    </div>
                )}

                <button 
                    type="submit" 
                    className="w-full btn btn-primary font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-primary-content border-t-transparent rounded-full animate-spin"></div>
                            Iniciando sesión...
                        </div>
                    ) : (
                        'Iniciar sesión'
                    )}
                </button>
            </form>
        </div>
    );
}; 