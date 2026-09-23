"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { DashboardHeader } from '@/components/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Trash2, ShoppingBag, Check } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function CartPage() {
  const { isAuthenticated } = useAuth();
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalAmount } = useCart();
  const router = useRouter();
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth');
    }
  }, [isAuthenticated, router]);

  const handleCheckout = () => {
    // Simulate purchase
    setPurchaseSuccess(true);
    setTimeout(() => {
      clearCart();
      router.push('/dashboard');
    }, 2000);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-white">Shopping Cart</h1>
        </div>

        {purchaseSuccess && (
          <Alert className="mb-6 bg-green-900 border-green-700">
            <Check className="h-4 w-4" />
            <AlertDescription className="text-green-100">
              Purchase successful! Redirecting to dashboard...
            </AlertDescription>
          </Alert>
        )}

        {cartItems.length === 0 ? (
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="py-12 text-center">
              <ShoppingBag className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-white mb-2">Your cart is empty</h2>
              <p className="text-slate-400 mb-6">Add some materials to get started</p>
              <Button onClick={() => router.push('/dashboard')}>
                Browse Materials
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        <p className="text-sm text-slate-400">{item.commonUse}</p>
                        <p className="text-sm text-slate-500 mt-1">
                          {item.location} • {item.quality} Quality
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-slate-400">Price</p>
                          <p className="text-lg font-semibold text-white">
                            ₹{item.currentPrice.toFixed(2)}
                          </p>
                          <p className="text-xs text-slate-500">per {item.unit}</p>
                        </div>

                        <div className="w-24">
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="bg-slate-700 border-slate-600 text-white"
                          />
                        </div>

                        <div className="text-right w-32">
                          <p className="text-sm text-slate-400">Total</p>
                          <p className="text-xl font-bold text-blue-400">
                            ₹{(item.currentPrice * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-slate-800 border-slate-700 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-white">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-slate-400">
                      <span>Subtotal</span>
                      <span>₹{totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Tax (18%)</span>
                      <span>₹{(totalAmount * 0.18).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Shipping</span>
                      <span>₹500.00</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <div className="flex justify-between text-xl font-bold mb-6">
                      <span className="text-white">Total</span>
                      <span className="text-blue-400">
                        ₹{(totalAmount * 1.18 + 500).toFixed(2)}
                      </span>
                    </div>

                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 mb-2"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => router.push('/dashboard')}
                    >
                      Continue Shopping
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-xs text-slate-500 text-center">
                      Secure checkout • 100% Safe & Secure
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}