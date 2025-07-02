'use client'

import { useState } from 'react'

interface AddToCartButtonProps {
  productId: string
  stock: number
  className?: string
}

export default function AddToCartButton({ 
  productId, 
  stock, 
  className = "btn btn-primary" 
}: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = async () => {
    if (stock === 0) return

    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would typically call your cart API
      // await addToCart(productId, quantity)
      
      setIsAdded(true)
      
      // Reset the success state after 2 seconds
      setTimeout(() => {
        setIsAdded(false)
      }, 2000)
      
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (stock === 0) {
    return (
      <button className={`${className} btn-disabled`} disabled>
        Agotado
      </button>
    )
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isLoading}
      className={`${className} ${isAdded ? 'btn-success' : ''}`}
    >
      {isLoading && <span className="loading loading-spinner loading-sm"></span>}
      {isAdded ? (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Agregado
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5L12 15l2.5 3L17 13" />
          </svg>
          Agregar al carrito
        </>
      )}
    </button>
  )
} 