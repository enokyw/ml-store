import Link from 'next/link';
import { useState } from 'react';

interface SignUpEmailVerificationProps {
    email?: string;
    onVerify: (code: string) => void;
    onResendEmail: () => void;
    isVerifying: boolean;
    isResending: boolean;
    error?: string;
}

export const SignUpEmailVerification = ({ 
    email, 
    onVerify, 
    onResendEmail, 
    isVerifying, 
    isResending, 
    error 
}: SignUpEmailVerificationProps) => {
    const [verificationCode, setVerificationCode] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (verificationCode.length === 6) {
            onVerify(verificationCode)
        }
    }

    const handleCodeChange = (value: string) => {
        // Only allow numbers and max 6 digits
        const numbers = value.replace(/\D/g, '').slice(0, 6)
        setVerificationCode(numbers)
    }

    return (
        <div className="space-y-8 max-w-sm w-full mx-auto">
            <div className="text-center">
                {/* Email Icon */}
                <div className="flex justify-center mb-4">
                    <div className="size-16 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg className="size-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-base-content mb-2">
                    Verifica tu email
                </h1>
                <p className="text-base-content/50 text-sm font-medium">
                    {email ? (
                        <>Ingresa el código de 6 dígitos que enviamos a <span className="font-semibold text-base-content">{email}</span></>
                    ) : (
                        'Ingresa el código de verificación de 6 dígitos'
                    )}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="w-full">
                    <label className="label mb-1">
                        <span className="label-text font-medium">Código de verificación</span>
                    </label>
                    <input
                        type="text"
                        placeholder="123456"
                        value={verificationCode}
                        onChange={(e) => handleCodeChange(e.target.value)}
                        className={`input w-full text-center text-2xl tracking-[0.5em] font-mono ${error ? 'input-error' : ''}`}
                        maxLength={6}
                        required
                    />
                    {error && (
                        <p className="text-error text-sm mt-1">{error}</p>
                    )}
                </div>

                <div className="bg-base-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                        <svg className="size-5 text-info mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-sm text-base-content/70">
                            <p className="font-medium mb-1">El código expira en 10 minutos</p>
                            <p>Si no recibes el email, revisa tu carpeta de spam o solicita un nuevo código.</p>
                        </div>
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="w-full btn btn-primary font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                    disabled={isVerifying || verificationCode.length !== 6}
                >
                    {isVerifying ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="size-4 border-2 border-primary-content border-t-transparent rounded-full animate-spin"></div>
                            Verificando...
                        </div>
                    ) : (
                        'Verificar email'
                    )}
                </button>

                <button 
                    type="button"
                    onClick={onResendEmail}
                    className="w-full btn btn-ghost font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                    disabled={isResending}
                >
                    {isResending ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="size-4 border-2 border-base-content border-t-transparent rounded-full animate-spin"></div>
                            Reenviando...
                        </div>
                    ) : (
                        'Reenviar código'
                    )}
                </button>
            </form>

            <div className="text-center">
                <span className="text-base-content/60 text-sm">¿Ya tienes una cuenta? </span>
                <Link href="/account/signIn" className="text-primary font-semibold text-sm">
                    Inicia sesión
                </Link>
            </div>
        </div>
    );
}; 