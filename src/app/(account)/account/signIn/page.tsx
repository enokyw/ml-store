'use client'

import { useState } from 'react'
import { SignInHeader } from './__comp/SignIn-Header'
import { SignInMain } from './__comp/SignIn-Main'
import { SignInForm } from './__comp/SignIn-Form'
import { useRouter } from 'next/navigation'

type StepType = 'main' | 'form';

export default function SignInPage() {
    const [step, setStep] = useState<StepType>('main')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const router = useRouter()

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({})

        // Basic validation
        const newErrors: Record<string, string> = {}

        if (!email || !validateEmail(email)) {
            newErrors.email = 'Por favor ingresa un email válido'
        }
        if (!password || password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsLoading(true)

        try {
            // Simulate API call to sign in
            await new Promise(resolve => setTimeout(resolve, 2000))

            // Handle successful login
            console.log('Login successfully', { email, password })
            router.push(`/@${email}`)
        } catch (error) {
            setErrors({ general: 'Credenciales inválidas. Inténtalo de nuevo.' })
        } finally {
            setIsLoading(false)
        }
    }

    const handleOAuthLogin = (provider: 'google' | 'facebook' | 'apple') => {
        // Handle OAuth login
        console.log(`Login with ${provider}`)
    }

    const handleClose = () => {
        window.history.back()
    }

    const handleBack = () => {
        if (step === 'form') {
            setStep('main')
        }
    }

    const renderStep = () => {
        switch (step) {
            case 'main':
                return (
                    <SignInMain
                        onEmailClick={() => setStep('form')}
                        onOAuthClick={handleOAuthLogin}
                    />
                )

            case 'form':
                return (
                    <SignInForm
                        email={email}
                        password={password}
                        onEmailChange={setEmail}
                        onPasswordChange={setPassword}
                        onSubmit={handleFormSubmit}
                        errors={errors}
                        isLoading={isLoading}
                    />
                )

            default:
                return null
        }
    }

    return (
        <div className="relative p-6 max-sm:pt-4 md:p-8">
            <SignInHeader
                onClose={handleClose}
                canGoBack={step !== 'main'}
                onBack={handleBack}
            />

            {renderStep()}
        </div>
    )
}