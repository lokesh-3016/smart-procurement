"use client";

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Factory } from 'lucide-react';

interface LoginFormProps {
  onToggleForm: () => void;
  onSuccess: () => void;
}

export function LoginForm({ onToggleForm, onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = await login(email, password);
    if (success) {
      onSuccess();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-600 rounded-full">
            <Factory className="w-8 h-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
        <CardDescription>Login to access Smart Procurement</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button type="submit" className="w-full">
            Sign In
          </Button>
          <div className="text-center text-sm">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onToggleForm}
              className="text-blue-600 hover:underline font-medium"
            >
              Sign Up
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}