import { Input } from '@/shared/components/custom/Input';

interface FormData {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

interface ChangePasswordFormProps {
    formData: FormData;
    onFormDataChange: (data: FormData) => void;
    onSubmit: (e: React.FormEvent) => void;
    errors: Record<string, string>;
    isLoading: boolean;
}

export const ChangePasswordForm = ({ formData, onFormDataChange, onSubmit, errors, isLoading }: ChangePasswordFormProps) => {
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
                    Cambiar contraseña
                </h1>
                <p className="text-base-content/50 text-sm font-medium">
                    Ingresa tu contraseña actual y la nueva contraseña
                </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
                <div>
                    <Input
                        label="Contraseña actual"
                        placeholder="Tu contraseña actual"
                        type="password"
                        value={formData.currentPassword}
                        onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                        className={errors.currentPassword ? 'input-error' : ''}
                        required
                    />
                    {errors.currentPassword && (
                        <p className="text-error text-sm mt-1">{errors.currentPassword}</p>
                    )}
                </div>

                <div>
                    <Input
                        label="Nueva contraseña"
                        placeholder="Nueva contraseña"
                        type="password"
                        value={formData.newPassword}
                        onChange={(e) => handleInputChange('newPassword', e.target.value)}
                        className={errors.newPassword ? 'input-error' : ''}
                        required
                    />
                    {errors.newPassword && (
                        <p className="text-error text-sm mt-1">{errors.newPassword}</p>
                    )}
                </div>

                <div>
                    <Input
                        label="Confirmar nueva contraseña"
                        placeholder="Confirmar nueva contraseña"
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

                {/* Password requirements */}
                <div className="bg-base-200 rounded-lg p-4">
                    <p className="text-sm font-medium text-base-content mb-2">Requisitos de la contraseña:</p>
                    <ul className="text-xs text-base-content/70 space-y-1">
                        <li className="flex items-center gap-2">
                            <div className={`size-1.5 rounded-full ${formData.newPassword.length >= 8 ? 'bg-success' : 'bg-base-content/30'}`}></div>
                            Al menos 8 caracteres
                        </li>
                        <li className="flex items-center gap-2">
                            <div className={`size-1.5 rounded-full ${/[A-Z]/.test(formData.newPassword) ? 'bg-success' : 'bg-base-content/30'}`}></div>
                            Una letra mayúscula
                        </li>
                        <li className="flex items-center gap-2">
                            <div className={`size-1.5 rounded-full ${/[a-z]/.test(formData.newPassword) ? 'bg-success' : 'bg-base-content/30'}`}></div>
                            Una letra minúscula
                        </li>
                        <li className="flex items-center gap-2">
                            <div className={`size-1.5 rounded-full ${/\d/.test(formData.newPassword) ? 'bg-success' : 'bg-base-content/30'}`}></div>
                            Un número
                        </li>
                    </ul>
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
                            <div className="size-4 border-2 border-primary-content border-t-transparent rounded-full animate-spin"></div>
                            Cambiando contraseña...
                        </div>
                    ) : (
                        'Cambiar contraseña'
                    )}
                </button>
            </form>
        </div>
    );
}; 