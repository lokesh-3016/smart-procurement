"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Filter, X } from 'lucide-react';

interface FilterPanelProps {
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
  selectedLocation: string;
  onLocationChange: (value: string) => void;
  selectedQuality: string;
  onQualityChange: (value: string) => void;
  onReset: () => void;
}

export function FilterPanel({
  priceRange,
  onPriceRangeChange,
  selectedLocation,
  onLocationChange,
  selectedQuality,
  onQualityChange,
  onReset
}: FilterPanelProps) {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-blue-400" />
            <CardTitle className="text-white">Filters</CardTitle>
          </div>
          <Button variant="ghost" size="sm" onClick={onReset}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label className="text-white">Price Range (₹)</Label>
          <div className="pt-2">
            <Slider
              min={0}
              max={10000}
              step={100}
              value={priceRange}
              onValueChange={(value) => onPriceRangeChange(value as [number, number])}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-slate-400">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-white">Location</Label>
          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="Mumbai">Mumbai</SelectItem>
              <SelectItem value="Delhi">Delhi</SelectItem>
              <SelectItem value="Bangalore">Bangalore</SelectItem>
              <SelectItem value="Chennai">Chennai</SelectItem>
              <SelectItem value="Pune">Pune</SelectItem>
              <SelectItem value="Kolkata">Kolkata</SelectItem>
              <SelectItem value="Hyderabad">Hyderabad</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-white">Quality</Label>
          <Select value={selectedQuality} onValueChange={onQualityChange}>
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
              <SelectValue placeholder="Select quality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Quality</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}