'use client';

import { useEffect, useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Datos de ejemplo para el carrito
const mockCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Producto Premium',
    price: 99.99,
    quantity: 2,
    image: 'https://picsum.photos/80/80?random=1'
  },
  {
    id: '2',
    name: 'Servicio Profesional',
    price: 149.50,
    quantity: 1,
    image: 'https://picsum.photos/80/80?random=2'
  },
  {
    id: '3',
    name: 'Plugin Avanzado',
    price: 29.99,
    quantity: 3,
    image: 'https://picsum.photos/80/80?random=3'
  }
];

export function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  useEffect(() => {
    if(isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Botón del carrito */}
      <button 
        className="btn btn-ghost btn-circle relative hover:bg-primary/10 transition-all duration-300"
        onClick={() => setIsOpen(true)}
      >
        <div className="indicator">
          <ShoppingCartIcon className="size-6" />
          {totalItems > 0 && (
            <span className="badge badge-primary badge-sm indicator-item animate-pulse">
              {totalItems}
            </span>
          )}
        </div>
      </button>

      {/* Drawer del carrito */}
      <div className={`drawer drawer-end ${isOpen ? 'drawer-open fixed inset-0 z-50' : ''}`}>
        <input 
          id="cart-drawer" 
          type="checkbox" 
          className="drawer-toggle" 
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        
        {/* Overlay */}
        <div className="drawer-side z-50">
          <label 
            htmlFor="cart-drawer" 
            className="drawer-overlay"
            onClick={() => setIsOpen(false)}
          ></label>
          
          {/* Contenido del carrito */}
          <div className="min-h-full w-screen sm:w-96 bg-base-100 shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-base-200">
              <div className="flex items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                  />
                </svg>
                <h2 className="text-xl font-bold">Carrito de Compras</h2>
              </div>
              <button 
                className="btn btn-ghost btn-sm btn-circle"
                onClick={() => setIsOpen(false)}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>

            {/* Items del carrito */}
            <div className="flex-1 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-16 w-16 text-base-300 mb-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1} 
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                    />
                  </svg>
                  <p className="text-base-content/60 text-lg">Tu carrito está vacío</p>
                  <p className="text-base-content/40 text-sm mt-1">
                    Agrega productos para comenzar
                  </p>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="card card-side bg-base-50 shadow-sm hover:shadow-md transition-all duration-200">
                      <figure className="w-20">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-20 object-cover rounded-l-lg"
                        />
                      </figure>
                      <div className="card-body p-3 flex-1">
                        <h3 className="font-semibold text-sm leading-tight">{item.name}</h3>
                        <p className="text-primary font-bold">${item.price.toFixed(2)}</p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button 
                              className="btn btn-xs btn-outline btn-circle"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button 
                              className="btn btn-xs btn-outline btn-circle"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          <button 
                            className="btn btn-ghost btn-xs text-error hover:bg-error/10"
                            onClick={() => removeItem(item.id)}
                          >
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-4 w-4" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer con total y botones */}
            {cartItems.length > 0 && (
              <div className="border-t border-base-200 p-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-primary">${totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="space-y-2">
                  <button className="btn btn-primary btn-block">
                    Proceder al Pago
                  </button>
                  <button 
                    className="btn btn-outline btn-block"
                    onClick={() => setIsOpen(false)}
                  >
                    Continuar Comprando
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 