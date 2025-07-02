import { Input } from '@/shared/components/custom/Input';

interface FormData {
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
    confirmPassword: string;
}

interface SignUpDetailsProps {
    formData: FormData;
    onFormDataChange: (data: FormData) => void;
    onSubmit: (e: React.FormEvent) => void;
    errors: Record<string, string>;
    isLoading: boolean;
}

export const SignUpDetails = ({ formData, onFormDataChange, onSubmit, errors, isLoading }: SignUpDetailsProps) => {
    const handleInputChange = (field: keyof FormData, value: string) => {
        onFormDataChange({
            ...formData,
            [field]: value
        });
    };

    return (
        <div className="space-y-8 max-w-sm w-full mx-auto">
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-base-content mb-2">
                    Completa tu perfil
                </h1>
                <p className="text-base-content/50 text-sm font-medium">
                    Necesitamos algunos datos más para crear tu cuenta
                </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <Input
                            label="Nombre"
                            placeholder="Tu nombre"
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className={errors.firstName ? 'input-error' : ''}
                            required
                        />
                        {errors.firstName && (
                            <p className="text-error text-sm mt-1">{errors.firstName}</p>
                        )}
                    </div>
                    <div>
                        <Input
                            label="Apellido"
                            placeholder="Apellido"
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className={errors.lastName ? 'input-error' : ''}
                            required
                        />
                        {errors.lastName && (
                            <p className="text-error text-sm mt-1">{errors.lastName}</p>
                        )}
                    </div>
                </div>

                <div>
                    <Input
                        label="Teléfono"
                        placeholder="Número de movil"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={errors.phone ? 'input-error' : ''}
                        required
                    />
                    {errors.phone && (
                        <p className="text-error text-sm mt-1">{errors.phone}</p>
                    )}
                </div>

                <div>
                    <Input
                        label="Contraseña"
                        placeholder="Contraseña"
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className={errors.password ? 'input-error' : ''}
                        required
                    />
                    {errors.password && (
                        <p className="text-error text-sm mt-1">{errors.password}</p>
                    )}
                </div>

                <div>
                    <Input
                        label="Confirmar contraseña"
                        placeholder="Confirmar contraseña"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className={errors.confirmPassword ? 'input-error' : ''}
                        required
                    />
                    {errors.confirmPassword && (
                        <p className="text-error text-sm mt-1">{errors.confirmPassword}</p>
                    )}
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
                            Creando cuenta...
                        </div>
                    ) : (
                        'Crear cuenta'
                    )}
                </button>
            </form>
        </div>
    );
}; 