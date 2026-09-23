"use client";

import React, { useState } from 'react';
import { Material } from '@/lib/materials-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ShoppingCart, TrendingUp, MapPin, Package } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';

interface MaterialCardProps {
  material: Material;
}

export function MaterialCard({ material }: MaterialCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(material, quantity);
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'In Stock': return 'bg-green-500';
      case 'Limited': return 'bg-yellow-500';
      case 'Out of Stock': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'High': return 'bg-blue-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-slate-800 border-slate-700">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-white">{material.name}</CardTitle>
            <CardDescription className="text-slate-400">{material.commonUse}</CardDescription>
          </div>
          <Badge className={getQualityColor(material.quality)}>{material.quality}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-white">
              ₹{material.currentPrice.toFixed(2)}
            </span>
            <div className="flex items-center gap-1 text-green-400">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs">Live</span>
            </div>
          </div>
          <p className="text-xs text-slate-400">per {material.unit}</p>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin className="w-4 h-4" />
            <span>{material.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-slate-400" />
            <Badge className={getAvailabilityColor(material.availability)} variant="outline">
              {material.availability}
            </Badge>
          </div>
        </div>

        <div className="flex gap-2">
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-20 bg-slate-700 border-slate-600 text-white"
          />
          <Button
            variant="outline"
            className="flex-1"
            onClick={handleAddToCart}
            disabled={material.availability === 'Out of Stock'}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>

        <Button
          variant="ghost"
          className="w-full text-blue-400 hover:text-blue-300"
          onClick={() => router.push(`/material/${material.id}`)}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}