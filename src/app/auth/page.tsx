"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoginForm } from '@/components/LoginForm';
import { RegisterForm } from '@/components/RegisterForm';
import { useAuth } from '@/contexts/AuthContext';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleSuccess = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="relative z-10">
        {isLogin ? (
          <LoginForm
            onToggleForm={() => setIsLogin(false)}
            onSuccess={handleSuccess}
          />
        ) : (
          <RegisterForm
            onToggleForm={() => setIsLogin(true)}
            onSuccess={handleSuccess}
          />
        )}
      </div>
    </div>
  );
}