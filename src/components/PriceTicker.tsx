"use client";

import React, { useState, useEffect } from 'react';
import { materialsData } from '@/lib/materials-data';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function PriceTicker() {
  const [tickerMaterials, setTickerMaterials] = useState(materialsData.slice(0, 15));
  const [, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerMaterials(prev =>
        prev.map(material => ({
          ...material,
          currentPrice: material.basePrice + (Math.random() * 20 - 10),
          trend: Math.random() > 0.5 ? 'up' : 'down'
        }))
      );
      setTick(t => t + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-800 border-b border-slate-700 overflow-hidden">
      <div className="py-3 px-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-white font-semibold text-sm">LIVE PRICE UPDATES</span>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left gap-8 whitespace-nowrap">
            {[...tickerMaterials, ...tickerMaterials].map((material, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <span className="text-slate-300 font-medium">{material.name}</span>
                <span className="text-white font-bold">
                  ₹{material.currentPrice.toFixed(2)}
                </span>
                {Math.random() > 0.5 ? (
                  <TrendingUp className="w-3 h-3 text-green-400" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-red-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}