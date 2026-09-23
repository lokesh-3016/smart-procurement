"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Material } from '@/lib/materials-data';

interface CartItem extends Material {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (material: Material, quantity: number) => void;
  removeFromCart: (materialId: string) => void;
  updateQuantity: (materialId: string, quantity: number) => void;
  clearCart: () => void;
  totalAmount: number;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (material: Material, quantity: number) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === material.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === material.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...material, quantity }];
    });
  };

  const removeFromCart = (materialId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== materialId));
  };

  const updateQuantity = (materialId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(materialId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === materialId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.currentPrice * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalAmount,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}