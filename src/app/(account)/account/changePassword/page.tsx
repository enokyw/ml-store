'use client'

import { useState } from 'react'
import { ChangePasswordHeader } from './__comp/ChangePassword-Header'
import { ChangePasswordForm } from './__comp/ChangePassword-Form'
import { ChangePasswordSuccess } from './__comp/ChangePassword-Success'

interface FormData {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

type StepType = 'form' | 'success';

export default function ChangePasswordPage() {
    const [step, setStep] = useState<StepType>('form')
    const [formData, setFormData] = useState<FormData>({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    const validatePassword = (password: string) => {
        const errors: string[] = []
        
        if (password.length < 8) {
            errors.push('La contraseña debe tener al menos 8 caracteres')
        }
        if (!/[A-Z]/.test(password)) {
            errors.push('Debe contener al menos una letra mayúscula')
        }
        if (!/[a-z]/.test(password)) {
            errors.push('Debe contener al menos una letra minúscula')
        }
        if (!/\d/.test(password)) {
            errors.push('Debe contener al menos un número')
        }
        
        return errors
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({})
        
        // Basic validation
        const newErrors: Record<string, string> = {}
        
        if (!formData.currentPassword) {
            newErrors.currentPassword = 'Ingresa tu contraseña actual'
        }
        
        if (!formData.newPassword) {
            newErrors.newPassword = 'Ingresa una nueva contraseña'
        } else {
            const passwordErrors = validatePassword(formData.newPassword)
            if (passwordErrors.length > 0) {
                newErrors.newPassword = passwordErrors[0]
            }
        }
        
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirma tu nueva contraseña'
        } else if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden'
        }
        
        if (formData.currentPassword === formData.newPassword) {
            newErrors.newPassword = 'La nueva contraseña debe ser diferente a la actual'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsLoading(true)
        
        try {
            // Simulate API call to change password
            await new Promise(resolve => setTimeout(resolve, 2000))
            
            // Simulate checking current password
            if (formData.currentPassword !== 'current123') {
                setErrors({ currentPassword: 'La contraseña actual es incorrecta' })
                return
            }
            
            // Handle successful password change
            console.log('Password changed successfully')
            setStep('success')
        } catch (error) {
            setErrors({ general: 'Error al cambiar la contraseña. Inténtalo de nuevo.' })
        } finally {
            setIsLoading(false)
        }
    }

    const handleClose = () => {
        window.history.back()
    }

    const handleBack = () => {
        if (step === 'success') {
            setStep('form')
        }
    }

    const handleContinue = () => {
        // Redirect to dashboard or profile
        window.history.back()
    }

    const renderStep = () => {
        switch (step) {
            case 'form':
                return (
                    <ChangePasswordForm
                        formData={formData}
                        onFormDataChange={setFormData}
                        onSubmit={handleFormSubmit}
                        errors={errors}
                        isLoading={isLoading}
                    />
                )
            
            case 'success':
                return (
                    <ChangePasswordSuccess
                        onContinue={handleContinue}
                    />
                )
            
            default:
                return null
        }
    }

    return (
        <div className="relative p-6 max-sm:pt-4 md:p-8">
            <ChangePasswordHeader
                onClose={handleClose}
                canGoBack={step === 'success'}
                onBack={handleBack}
            />
            
            {renderStep()}
        </div>
    )
}
