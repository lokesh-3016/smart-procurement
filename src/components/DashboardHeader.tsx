"use client";

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, LogOut, Factory, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function DashboardHeader() {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/auth');
  };

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Factory className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Smart Procurement</h1>
              <p className="text-xs text-slate-400">Real-Time Material Price Insights</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-800 rounded-lg">
              <User className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-white">{user?.username}</span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              className="relative"
              onClick={() => router.push('/cart')}
            >
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}