'use client'

import { useState } from 'react'
import { ForgotPasswordHeader } from './__comp/ForgotPassword-Header'
import { ForgotPasswordEmail } from './__comp/ForgotPassword-Email'
import { ForgotPasswordSuccess } from './__comp/ForgotPassword-Success'

type StepType = 'email' | 'success';

export default function ForgotPasswordPage() {
    const [step, setStep] = useState<StepType>('email')
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isResending, setIsResending] = useState(false)
    const [error, setError] = useState('')

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        
        // Basic validation
        if (!email || !validateEmail(email)) {
            setError('Por favor ingresa un email válido')
            return
        }

        setIsLoading(true)
        
        try {
            // Simulate API call to send reset email
            await new Promise(resolve => setTimeout(resolve, 2000))
            
            // Handle successful email send
            console.log('Password reset email sent to:', email)
            setStep('success')
        } catch (error) {
            setError('Error al enviar el email. Inténtalo de nuevo.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleResendEmail = async () => {
        setIsResending(true)
        
        try {
            // Simulate API call to resend email
            await new Promise(resolve => setTimeout(resolve, 1500))
            
            console.log('Password reset email resent to:', email)
        } catch (error) {
            console.error('Error resending email')
        } finally {
            setIsResending(false)
        }
    }

    const handleClose = () => {
        window.history.back()
    }

    const handleBack = () => {
        if (step === 'success') {
            setStep('email')
        }
    }

    const renderStep = () => {
        switch (step) {
            case 'email':
                return (
                    <ForgotPasswordEmail
                        email={email}
                        onEmailChange={setEmail}
                        onSubmit={handleEmailSubmit}
                        error={error}
                        isLoading={isLoading}
                    />
                )
            
            case 'success':
                return (
                    <ForgotPasswordSuccess
                        email={email}
                        onResendEmail={handleResendEmail}
                        isResending={isResending}
                    />
                )
            
            default:
                return null
        }
    }

    return (
        <div className="relative p-6 max-sm:pt-4 md:p-8">
            <ForgotPasswordHeader
                onClose={handleClose}
                canGoBack={step === 'success'}
                onBack={handleBack}
            />
            
            {renderStep()}
        </div>
    )
}
