"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { DashboardHeader } from '@/components/DashboardHeader';
import { PriceTicker } from '@/components/PriceTicker';
import { CategorySection } from '@/components/CategorySection';
import { MaterialCard } from '@/components/MaterialCard';
import { FilterPanel } from '@/components/FilterPanel';
import { materialsData, Material } from '@/lib/materials-data';
import { Atom, Droplet, Box, FlaskConical, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [materials, setMaterials] = useState<Material[]>(materialsData);
  const [filteredMaterials, setFilteredMaterials] = useState<Material[]>(materialsData.slice(0, 12));
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedQuality, setSelectedQuality] = useState('all');
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    // Update prices every 5 seconds
    const interval = setInterval(() => {
      setMaterials(prev =>
        prev.map(material => ({
          ...material,
          currentPrice: material.basePrice + (Math.random() * 20 - 10)
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Apply filters
    let filtered = materials;

    if (selectedLocation !== 'all') {
      filtered = filtered.filter(m => m.location === selectedLocation);
    }

    if (selectedQuality !== 'all') {
      filtered = filtered.filter(m => m.quality === selectedQuality);
    }

    filtered = filtered.filter(
      m => m.currentPrice >= priceRange[0] && m.currentPrice <= priceRange[1]
    );

    setFilteredMaterials(filtered.slice(0, 12));
  }, [priceRange, selectedLocation, selectedQuality, materials]);

  const handleResetFilters = () => {
    setPriceRange([0, 10000]);
    setSelectedLocation('all');
    setSelectedQuality('all');
  };

  const categories = [
    {
      title: 'Metals',
      description: 'Iron, Steel, Aluminum, Copper, and more',
      icon: <Atom className="w-8 h-8 text-white" />,
      count: materialsData.filter(m => m.category === 'Metals').length,
      color: 'from-blue-600 to-blue-800',
      category: 'Metals'
    },
    {
      title: 'Oils',
      description: 'Hydraulic, Engine, Compressor oils, and more',
      icon: <Droplet className="w-8 h-8 text-white" />,
      count: materialsData.filter(m => m.category === 'Oils').length,
      color: 'from-amber-600 to-amber-800',
      category: 'Oils'
    },
    {
      title: 'Polymers',
      description: 'PE, PP, PVC, PET, and more',
      icon: <Box className="w-8 h-8 text-white" />,
      count: materialsData.filter(m => m.category === 'Polymers').length,
      color: 'from-purple-600 to-purple-800',
      category: 'Polymers'
    },
    {
      title: 'Chemicals',
      description: 'Acids, Bases, Solvents, and more',
      icon: <FlaskConical className="w-8 h-8 text-white" />,
      count: materialsData.filter(m => m.category === 'Chemicals').length,
      color: 'from-green-600 to-green-800',
      category: 'Chemicals'
    }
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <DashboardHeader />
      <PriceTicker />
      
      <main className="container mx-auto px-4 py-8">
        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Material Classifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <CategorySection key={idx} {...category} />
            ))}
          </div>
        </section>

        {/* Materials with Filters */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Browse Materials</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <FilterPanel
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                selectedLocation={selectedLocation}
                onLocationChange={setSelectedLocation}
                selectedQuality={selectedQuality}
                onQualityChange={setSelectedQuality}
                onReset={handleResetFilters}
              />
            </div>
            
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMaterials.map((material) => (
                  <MaterialCard key={material.id} material={material} />
                ))}
              </div>
              {filteredMaterials.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-400 text-lg">No materials found matching your filters</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* AI Chat Button */}
      <Button
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-blue-600 hover:bg-blue-700"
        onClick={() => router.push('/chat')}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
}