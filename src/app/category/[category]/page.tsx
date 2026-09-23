"use client";

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { DashboardHeader } from '@/components/DashboardHeader';
import { PriceTicker } from '@/components/PriceTicker';
import { MaterialCard } from '@/components/MaterialCard';
import { FilterPanel } from '@/components/FilterPanel';
import { materialsData, Material } from '@/lib/materials-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import jsPDF from 'jspdf';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params);
  const category = resolvedParams.category;
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [materials, setMaterials] = useState<Material[]>([]);
  const [filteredMaterials, setFilteredMaterials] = useState<Material[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedQuality, setSelectedQuality] = useState('all');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth');
      return;
    }
    
    const categoryMaterials = materialsData.filter(m => m.category === category);
    setMaterials(categoryMaterials);
    setFilteredMaterials(categoryMaterials);
  }, [category, isAuthenticated, router]);

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

    setFilteredMaterials(filtered);
  }, [priceRange, selectedLocation, selectedQuality, materials]);

  const handleResetFilters = () => {
    setPriceRange([0, 10000]);
    setSelectedLocation('all');
    setSelectedQuality('all');
  };

  // Prepare chart data
  const qualityData = [
    { name: 'High', value: materials.filter(m => m.quality === 'High').length },
    { name: 'Medium', value: materials.filter(m => m.quality === 'Medium').length },
    { name: 'Low', value: materials.filter(m => m.quality === 'Low').length }
  ];

  const availabilityData = materials.slice(0, 10).map(m => ({
    name: m.name.substring(0, 15),
    price: m.currentPrice
  }));

  const COLORS = ['#3b82f6', '#eab308', '#f97316'];

  const downloadReport = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`${category} Materials Report`, 20, 20);
    doc.setFontSize(12);
    doc.text(`Total Materials: ${materials.length}`, 20, 40);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 20, 50);
    
    let y = 70;
    materials.slice(0, 10).forEach((material, idx) => {
      doc.text(`${idx + 1}. ${material.name}: ₹${material.currentPrice.toFixed(2)}`, 20, y);
      y += 10;
    });
    
    doc.save(`${category}-report.pdf`);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <DashboardHeader />
      <PriceTicker />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => router.push('/dashboard')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-4xl font-bold text-white">{category}</h1>
          </div>
          <Button onClick={downloadReport} className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
        </div>

        {/* Analytics Charts */}
        <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Quality Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={qualityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {qualityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Price Comparison (Top 10)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={availabilityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
                <Bar dataKey="price" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Materials Grid */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">All {category} Materials</h2>
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
    </div>
  );
}