"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CategorySectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  count: number;
  color: string;
  category: string;
}

export function CategorySection({ title, description, icon, count, color, category }: CategorySectionProps) {
  const router = useRouter();

  return (
    <Card className={`bg-gradient-to-br ${color} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            {icon}
          </div>
          <div className="text-white/80 text-sm font-medium">
            {count} materials
          </div>
        </div>
        <CardTitle className="text-white text-2xl mt-4">{title}</CardTitle>
        <CardDescription className="text-white/80">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="secondary" 
          className="w-full"
          onClick={() => router.push(`/category/${category}`)}
        >
          See All Materials
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}