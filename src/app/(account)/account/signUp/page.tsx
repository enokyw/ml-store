'use client'

import { useState } from 'react'
import { SignUpHeader } from './__comp/SignUp-Header'
import { SignUpMain } from './__comp/SignUp-Main'
import { SignUpEmail } from './__comp/SignUp-Email'
import { SignUpDetails } from './__comp/SignUp-Details'
import { SignUpSuccess } from './__comp/SignUp-Success'
import { SignUpEmailVerification } from './__comp/SignUp-EmailVerification'

type StepType = 'main' | 'email' | 'details' | 'success' | 'verification';

interface FormData {
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
    confirmPassword: string;
}

export default function SignUpPage() {
    const [step, setStep] = useState<StepType>('main')
    const [email, setEmail] = useState('')
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        password: '',
        phone: '',
        confirmPassword: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isResending, setIsResending] = useState(false)
    const [isVerifying, setIsVerifying] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [verificationError, setVerificationError] = useState('')

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({})

        if (!email || !validateEmail(email)) {
            setErrors({ email: 'Por favor ingresa un email válido' })
            return
        }

        setIsLoading(true)

        try {
            // Simulate API call to verify email
            await new Promise(resolve => setTimeout(resolve, 1000))

            // If email is accepted, move to next step
            setStep('details')
        } catch (error) {
            setErrors({ email: 'Este email ya está registrado o es inválido' })
        } finally {
            setIsLoading(false)
        }
    }

    const handleDetailsSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({})

        // Basic validation
        const newErrors: Record<string, string> = {}

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'El nombre es requerido'
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'El apellido es requerido'
        }
        if (!formData.password || formData.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres'
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'El número de teléfono es requerido'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsLoading(true)

        try {
            // Simulate API call to create account
            await new Promise(resolve => setTimeout(resolve, 2000))

            // Handle successful registration
            console.log('Account created successfully', { email, ...formData })
            setStep('success')
        } catch (error) {
            setErrors({ general: 'Error al crear la cuenta. Inténtalo de nuevo.' })
        } finally {
            setIsLoading(false)
        }
    }

    const handleOAuthLogin = (provider: 'google' | 'facebook' | 'apple') => {
        // Handle OAuth login
        console.log(`Login with ${provider}`)
    }

    const handleResendEmail = async () => {
        setIsResending(true)
        
        try {
            // Simulate API call to resend verification email
            await new Promise(resolve => setTimeout(resolve, 1500))
            
            console.log('Verification email resent to:', email)
        } catch (error) {
            console.error('Error resending email')
        } finally {
            setIsResending(false)
        }
    }

    const handleEmailVerification = async (code: string) => {
        setIsVerifying(true)
        setVerificationError('')
        
        try {
            // Simulate API call to verify email code
            await new Promise(resolve => setTimeout(resolve, 2000))
            
            // Simulate checking verification code
            if (code !== '123456') {
                setVerificationError('Código incorrecto. Inténtalo de nuevo.')
                return
            }
            
            // Handle successful verification
            console.log('Email verified successfully')
            // Redirect to dashboard or welcome page
            window.location.href = '/dashboard'
        } catch (error) {
            setVerificationError('Error al verificar el código. Inténtalo de nuevo.')
        } finally {
            setIsVerifying(false)
        }
    }

    const handleClose = () => {
        window.history.back()
    }

    const handleBack = () => {
        if (step === 'email') {
            setStep('main')
        } else if (step === 'details') {
            setStep('email')
        } else if (step === 'success') {
            setStep('details')
        } else if (step === 'verification') {
            setStep('success')
        }
    }

    const renderStep = () => {
        switch (step) {
            case 'main':
                return (
                    <SignUpMain
                        onEmailClick={() => setStep('email')}
                        onOAuthClick={handleOAuthLogin}
                    />
                )

            case 'email':
                return (
                    <SignUpEmail
                        email={email}
                        onEmailChange={setEmail}
                        onSubmit={handleEmailSubmit}
                        error={errors.email}
                        isLoading={isLoading}
                    />
                )

            case 'details':
                return (
                    <SignUpDetails
                        formData={formData}
                        onFormDataChange={setFormData}
                        onSubmit={handleDetailsSubmit}
                        errors={errors}
                        isLoading={isLoading}
                    />
                )

            case 'success':
                return (
                    <SignUpSuccess
                        email={email}
                        firstName={formData.firstName}
                        onResendEmail={handleResendEmail}
                        onVerifyManually={() => setStep('verification')}
                        isResending={isResending}
                    />
                )

            case 'verification':
                return (
                    <SignUpEmailVerification
                        email={email}
                        onVerify={handleEmailVerification}
                        onResendEmail={handleResendEmail}
                        isVerifying={isVerifying}
                        isResending={isResending}
                        error={verificationError}
                    />
                )

            default:
                return null
        }
    }

    return (
        <div className="relative p-6 max-sm:pt-4 md:p-8">
            <SignUpHeader
                onClose={handleClose}
                canGoBack={step !== 'main'}
                onBack={handleBack}
            />

            {renderStep()}
        </div>
    )
}