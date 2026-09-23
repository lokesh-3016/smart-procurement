"use client";

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { DashboardHeader } from '@/components/DashboardHeader';
import { PriceTicker } from '@/components/PriceTicker';
import { materialsData } from '@/lib/materials-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ShoppingCart, MapPin, Package, TrendingUp, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function MaterialDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const materialId = resolvedParams.id;
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();
  const router = useRouter();
  const [material, setMaterial] = useState(materialsData.find(m => m.id === materialId));
  const [quantity, setQuantity] = useState(1);
  const [priceHistory, setPriceHistory] = useState<{ time: string; price: number }[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth');
      return;
    }

    if (!material) {
      router.push('/dashboard');
      return;
    }

    // Generate initial price history
    const history = [];
    for (let i = 11; i >= 0; i--) {
      history.push({
        time: `${i}h ago`,
        price: material.basePrice + (Math.random() * 20 - 10)
      });
    }
    setPriceHistory(history);

    // Update price every 5 seconds
    const interval = setInterval(() => {
      setMaterial(prev => prev ? {
        ...prev,
        currentPrice: prev.basePrice + (Math.random() * 20 - 10)
      } : prev);

      setPriceHistory(prev => {
        const newHistory = [...prev.slice(1), {
          time: 'Now',
          price: (material?.basePrice || 0) + (Math.random() * 20 - 10)
        }];
        return newHistory;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [materialId, isAuthenticated, router, material?.basePrice]);

  const handleAddToCart = () => {
    if (material) {
      addToCart(material, quantity);
    }
  };

  const downloadReport = async () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Material Price Report', 20, 20);
    
    if (material) {
      doc.setFontSize(14);
      doc.text(`Material: ${material.name}`, 20, 40);
      doc.text(`Category: ${material.category}`, 20, 50);
      doc.text(`Current Price: ₹${material.currentPrice.toFixed(2)}`, 20, 60);
      doc.text(`Location: ${material.location}`, 20, 70);
      doc.text(`Quality: ${material.quality}`, 20, 80);
      doc.text(`Availability: ${material.availability}`, 20, 90);
      doc.text(`Common Use: ${material.commonUse}`, 20, 100);
      doc.text(`Generated: ${new Date().toLocaleString()}`, 20, 110);
    }
    
    doc.save(`${material?.name}-report.pdf`);
  };

  if (!isAuthenticated || !material) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <DashboardHeader />
      <PriceTicker />
      
      <main className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Material Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl text-white">{material.name}</CardTitle>
                    <p className="text-slate-400 mt-2">{material.commonUse}</p>
                  </div>
                  <Badge className="bg-blue-600">{material.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">Current Price</p>
                    <p className="text-3xl font-bold text-white">₹{material.currentPrice.toFixed(2)}</p>
                    <p className="text-xs text-slate-500">per {material.unit}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">Base Price</p>
                    <p className="text-2xl font-semibold text-slate-300">₹{material.basePrice.toFixed(2)}</p>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-green-400">
                        {((material.currentPrice - material.basePrice) / material.basePrice * 100).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-xs text-slate-500">Location</p>
                      <p className="text-white">{material.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-xs text-slate-500">Availability</p>
                      <Badge variant="outline" className="mt-1">
                        {material.availability}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <p className="text-sm text-slate-400 mb-2">Quality Rating</p>
                  <Badge className={
                    material.quality === 'High' ? 'bg-blue-600' :
                    material.quality === 'Medium' ? 'bg-yellow-600' :
                    'bg-orange-600'
                  }>
                    {material.quality} Quality
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Price Chart */}
            <Card className="bg-slate-800 border-slate-700" id="price-chart">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">Price History (Last 12 Hours)</CardTitle>
                  <Button variant="outline" size="sm" onClick={downloadReport}>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={priceHistory}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                      labelStyle={{ color: '#f1f5f9' }}
                    />
                    <Area type="monotone" dataKey="price" stroke="#3b82f6" fillOpacity={1} fill="url(#colorPrice)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Purchase Panel */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800 border-slate-700 sticky top-24">
              <CardHeader>
                <CardTitle className="text-white">Purchase Material</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">Quantity ({material.unit})</label>
                  <Input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400">Price per unit</span>
                    <span className="text-white">₹{material.currentPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-slate-400">Quantity</span>
                    <span className="text-white">{quantity} {material.unit}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-2 border-t border-slate-700">
                    <span className="text-white">Total</span>
                    <span className="text-blue-400">₹{(material.currentPrice * quantity).toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={handleAddToCart}
                  disabled={material.availability === 'Out of Stock'}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>

                {material.availability === 'Limited' && (
                  <p className="text-yellow-500 text-xs text-center">
                    Limited stock available. Order soon!
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}