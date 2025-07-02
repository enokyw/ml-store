'use client'

import { useState } from 'react'

interface QuantitySelectorProps {
  stock: number
  initialQuantity?: number
  onQuantityChange?: (quantity: number) => void
}

export default function QuantitySelector({ 
  stock, 
  initialQuantity = 1, 
  onQuantityChange 
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity)

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      onQuantityChange?.(newQuantity)
    }
  }

  const handleIncrease = () => {
    if (quantity < stock) {
      const newQuantity = quantity + 1
      setQuantity(newQuantity)
      onQuantityChange?.(newQuantity)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value) && value >= 1 && value <= stock) {
      setQuantity(value)
      onQuantityChange?.(value)
    }
  }

  return (
    <div className="flex items-center border border-base-300 rounded-lg">
      <button
        type="button"
        onClick={handleDecrease}
        disabled={quantity <= 1}
        className="btn btn-ghost btn-sm px-3 disabled:opacity-50"
        aria-label="Disminuir cantidad"
      >
        −
      </button>
      
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={1}
        max={stock}
        className="input input-ghost input-sm w-16 text-center border-none focus:outline-none"
        aria-label="Cantidad"
      />
      
      <button
        type="button"
        onClick={handleIncrease}
        disabled={quantity >= stock}
        className="btn btn-ghost btn-sm px-3 disabled:opacity-50"
        aria-label="Aumentar cantidad"
      >
        +
      </button>
    </div>
  )
} 