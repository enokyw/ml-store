'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PaymentButtonsProps {
  productId: string
  productName: string
  price: number
}

export default function PaymentButtons({ productId, productName, price }: PaymentButtonsProps) {
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const handleYapePayment = async () => {
    setIsLoading('yape')
    try {
      // Implementar lógica de pago con Yape
      console.log("Pago con Yape para:", productName)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
    } catch (error) {
      console.error('Error en pago con Yape:', error)
    } finally {
      setIsLoading(null)
    }
  }

  const handlePlinPayment = async () => {
    setIsLoading('plin')
    try {
      // Implementar lógica de pago con Plin
      console.log("Pago con Plin para:", productName)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
    } catch (error) {
      console.error('Error en pago con Plin:', error)
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <button 
        onClick={handleYapePayment}
        disabled={isLoading !== null}
        className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700"
      >
        {isLoading === 'yape' && <span className="loading loading-spinner loading-sm"></span>}
        <Image 
          src="/yape.png" 
          alt="Yape" 
          width={20} 
          height={20} 
          className="w-5 h-5"
        />
        Pagar con Yape
      </button>
      
      <button 
        onClick={handlePlinPayment}
        disabled={isLoading !== null}
        className="btn btn-secondary w-full bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700"
      >
        {isLoading === 'plin' && <span className="loading loading-spinner loading-sm"></span>}
        <Image 
          src="/plin.webp" 
          alt="Plin" 
          width={20} 
          height={20} 
          className="w-5 h-5"
        />
        Pagar con Plin
      </button>
    </div>
  )
} 